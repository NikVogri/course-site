import firebase from "./firebase";

export const getCurrentUser = async () => {
  return await firebase.auth().currentUser;
};

export const getDatabaseData = async path => {
  const snapshotData = await firebase.database().ref(path).once("value");
  return await snapshotData.val();
};

export const setDatabaseData = async (path, data) => {
  await firebase.database().ref(path).set(data);
};

export const pushToDatabase = async (path, data) => {
  await firebase.database().ref(path).push(data);
};

export const updateDatabase = async (path, data) => {
  await firebase.database().ref(path).update(data);
};

export const getErrorMessage = error => {
  switch (error.code) {
    case "auth/wrong-password":
      return "The password is invalid";
    case "uth/user-not-found":
      return "User with that email address could not be found";
    default:
      return error.message;
  }
};

export const signoutUserFromSession = () => {
  firebase.auth().signOut();
};

export const uploadImage = async (image, path) => {
  const uploadImage = await firebase.storage().ref(path).put(image);
  if (uploadImage.state === "success") {
    return true;
  } else {
    return false;
  }
};
