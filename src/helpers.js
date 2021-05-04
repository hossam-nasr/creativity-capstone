import app from "./firebase";

const extractJsonFromResponse = async (response) =>
  await Promise.all(
    response.docs.map((doc) => doc && doc.exists && doc.data())
  );

export const setShapesListener = (callback) => {
  app
    .firestore()
    .collectionGroup("shapes")
    .onSnapshot(async (response) => {
      try {
        const json = await extractJsonFromResponse(response);
        callback(json);
      } catch (error) {
        console.log("Error: ", error);
      }
    });
};

export const getShapes = async () => {
  try {
    const response = await app.firestore().collectionGroup("shapes").get();
    return await extractJsonFromResponse(response);
  } catch (error) {
    console.log("Error: ", error);
    return [];
  }
};

export const setLinesListener = (callback) => {
  app
    .firestore()
    .collectionGroup("lines")
    .onSnapshot(async (response) => {
      try {
        const json = await extractJsonFromResponse(response);
        callback(json);
      } catch (error) {
        console.log("Error: ", error);
      }
    });
};

export const getLines = async () => {
  try {
    const response = await app.firestore().collectionGroup("lines").get();
    return await extractJsonFromResponse(response);
  } catch (error) {
    console.log("Error: ", error);
    return [];
  }
};

export const postLine = async ({ id, from, to }) => {
  try {
    return await app
      .firestore()
      .collection("lines")
      .doc(id)
      .set({ id, from, to });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const postShape = async ({ id, type, x, y }) => {
  try {
    return await app
      .firestore()
      .collection("shapes")
      .doc(id)
      .set({ id, type, x, y });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const modifyShape = async (id, type) => {
  return await app.firestore().collection("shapes").doc(id).update({ type });
};

async function deleteCollection(db, collectionPath, batchSize) {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.orderBy("__name__").limit(batchSize);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(db, query, resolve).catch(reject);
  });
}

async function deleteQueryBatch(db, query, resolve) {
  const snapshot = await query.get();

  const batchSize = snapshot.size;
  if (batchSize === 0) {
    // When there are no documents left, we are done
    resolve();
    return;
  }

  // Delete documents in a batch
  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();

  // Recurse on the next process tick, to avoid
  // exploding the stack.
  process.nextTick(() => {
    deleteQueryBatch(db, query, resolve);
  });
}

export const clearDb = async () => {
  try {
    await deleteCollection(app.firestore(), "shapes", 100);
    await deleteCollection(app.firestore(), "lines", 100);
  } catch (error) {
    console.log("Error: ", error);
  }
};
