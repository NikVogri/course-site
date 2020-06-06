import * as actionTypes from "./actionTypes";
import firebase from "../../firebase/firebase";
import { stringify } from "flatted";

/////////
// loading actions
const setLoading = status => ({
  type: actionTypes.SET_LOADING,
  payload: status,
});

///////
// AUTH ACTIONS
//////

//////
// create user
const createdUserSuccess = data => ({
  type: actionTypes.CREATE_USER_SUCCESS,
  payload: data,
});

const createUserFail = errorMsg => ({
  type: actionTypes.CREATE_USER_FAIL,
  payload: errorMsg,
});

export const createUser = formBody => {
  return async dispatch => {
    const { name, email, password } = formBody;
    dispatch(setLoading(true));
    try {
      // create user auth
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      // get logged in user
      const currentUser = await firebase.auth().currentUser;

      // get user id
      const currentUserId = currentUser.uid;
      // get user token
      const token = await currentUser.getIdToken();
      // update user name
      await currentUser.updateProfile({ displayName: name });

      // update db
      await firebase
        .database()
        .ref("users/" + currentUserId)
        .set({
          name: name,
          email: email,
          createdAt: new Date().getTime(),
          profile_image: "default",
        });

      // save user data to localstorage
      const localStorageString = JSON.stringify({
        id: currentUserId,
        name: name,
        token: token,
      });

      localStorage.setItem("user", localStorageString);

      // send user success
      const userData = {
        token,
        name: currentUser.displayName,
        id: currentUser.uid,
      };

      dispatch(createdUserSuccess(userData));
    } catch (err) {
      dispatch(createUserFail(err.message));
    }
  };
};

//////
// sign in user

const loginUserSuccess = data => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  payload: data,
});

const loginUserFail = errorMsg => ({
  type: actionTypes.LOGIN_USER_FAIL,
  payload: errorMsg,
});

export const loginUser = formBody => {
  return async dispatch => {
    dispatch(setLoading(true));
    try {
      const { email, password } = formBody;
      // log in user
      await firebase.auth().signInWithEmailAndPassword(email, password);

      const currentUser = firebase.auth().currentUser;

      // get user info
      const token = await currentUser.getIdToken();
      const currentUserId = currentUser.uid;
      const currentUserName = currentUser.displayName;

      // save user data to localstorage
      const localStorageString = JSON.stringify({
        id: currentUserId,
        name: currentUserName,
        token: token,
      });

      localStorage.setItem("user", localStorageString);

      // send user success
      const userData = {
        token,
        name: currentUserName,
        id: currentUserId,
      };

      dispatch(loginUserSuccess(userData));
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        dispatch(loginUserFail("The password is invalid"));
      } else if (err.code === "auth/user-not-found") {
        dispatch(
          loginUserFail("User with that email address could not be found")
        );
      }
    }
  };
};

export const loginUserFromLocal = data => {
  return dispatch => {
    dispatch(loginUserSuccess(data));
  };
};
