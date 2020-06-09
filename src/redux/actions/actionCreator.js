import * as actionTypes from "./actionTypes";

import firebase from "../../firebase/firebase";

import {
  getCurrentUser,
  setDatabaseData,
  updateDatabase,
  getErrorMessage,
  signoutUserFromSession,
  getDatabaseData,
} from "../../firebase/util";

import {
  saveToLocalStorage,
  deleteFromLocalStorage,
} from "../../util/localStorage";

/////////
// loading actions
const setLoading = status => ({
  type: actionTypes.SET_LOADING,
  payload: status,
});

///////
// MODAL ACTIONS
//////

///////
// user modal
export const userModalToggle = bool => ({
  type: actionTypes.USER_MODAL_TOGGLE,
  payload: bool,
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
      const currentUser = await getCurrentUser();

      // get user id
      const currentUserId = currentUser.uid;
      // get user token
      const token = await currentUser.getIdToken();
      // update user name
      await currentUser.updateProfile({ displayName: name });

      // create db field
      const data = {
        name: name,
        email: email,
        createdAt: new Date().getTime(),
        profile_image: "default",
        points: 0,
      };

      setDatabaseData("users/" + currentUserId, data);

      // save user data to localstorage
      const localStorageData = {
        id: currentUserId,
        name: name,
        token: token,
      };

      saveToLocalStorage("user", localStorageData);

      // send user success
      const userData = {
        token,
        name: currentUser.displayName,
        id: currentUser.uid,
      };

      dispatch(createdUserSuccess(userData));
      return true;
    } catch (err) {
      const error = getErrorMessage(err);
      dispatch(createUserFail(error));
      return false;
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

      const currentUser = await getCurrentUser();

      // get user info
      const token = await currentUser.getIdToken();
      const currentUserId = currentUser.uid;
      const currentUserName = currentUser.displayName;

      // save user data to localstorage
      const localStorageData = {
        id: currentUserId,
        name: currentUserName,
        token: token,
      };
      saveToLocalStorage("user", localStorageData);

      // send user success
      const userData = {
        token,
        name: currentUserName,
        id: currentUserId,
      };

      updateLastLoginTime(userData.id);
      dispatch(loginUserSuccess(userData));
      return true;
    } catch (err) {
      const error = getErrorMessage(err);
      dispatch(loginUserFail(error));
      return false;
    }
  };
};

const updateLastLoginTime = async userId => {
  try {
    await setDatabaseData(`users/${userId}/lastLogin`, new Date().getTime());
    return;
  } catch (err) {
    console.log(err.message);
  }
};

export const loginUserFromLocal = data => {
  return dispatch => {
    if (data) {
      dispatch(loginUserSuccess(data));
    } else {
      dispatch(loginUserFail("No data found"));
    }
  };
};

///////
// sign out user

export const signoutUser = () => {
  deleteFromLocalStorage("user");
  signoutUserFromSession();
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

///////
// COURSE ACTIONS
//////

///////
// Add course to user db
const addCourseToUserFail = errorMsg => {
  return {
    type: actionTypes.ADD_COURSE_TO_USER_FAIL,
    payload: errorMsg,
  };
};

const addCourseToUserSuccess = data => {
  return {
    type: actionTypes.ADD_COURSE_TO_USER_SUCCESS,
    payload: data,
  };
};

export const addCourseToUser = courseId => {
  return async dispatch => {
    try {
      const user = await getCurrentUser();
      if (!user) return dispatch(addCourseToUserFail("User is not signed in"));

      const userDBPath = `users/${user.uid}`;

      const data = await getDatabaseData(userDBPath);
      if (!data)
        return dispatch(addCourseToUserFail("No data could be fetched"));

      // Check if user has any previous courses
      if (!data.courses) {
        await setDatabaseData(`${userDBPath}/courses`, [courseId]);
        dispatch(
          addCourseToUserSuccess({
            message: "Course added to user list",
            courseId,
          })
        );
      } else {
        // check if this course is not yet added to user db
        const unique = !data.courses.includes(courseId);
        if (unique) {
          const courseList = [...data.courses, courseId];
          await setDatabaseData(`${userDBPath}/courses`, courseList);
          dispatch(
            addCourseToUserSuccess({
              message: "Course added to user list",
              courseId,
            })
          );
        } else {
          return;
        }
      }
    } catch (err) {
      dispatch(addCourseToUserFail(err.message));
    }
  };
};

///////
// Add course playlist item to watched

const setWatchedFail = errorMsg => {
  return {
    type: actionTypes.SET_WATCHED_FAIL,
    payload: errorMsg,
  };
};

const setWatchedSuccess = data => {
  return {
    type: actionTypes.SET_WATCHED_SUCCESS,
    payload: data,
  };
};

export const addToWatched = (courseId, videoId) => {
  return async dispatch => {
    const user = await getCurrentUser();
    if (!user) return dispatch(setWatchedFail("User is not signed in"));
    const userDBPath = `users/${user.uid}`;
    const data = await getDatabaseData(userDBPath);
    if (!data) return dispatch(setWatchedFail("No data could be fetched"));

    // add video to course watched
    if (!data.watched || !data.watched[courseId]) {
      await updateDatabase(`${userDBPath}/watched/`, { [courseId]: [videoId] });
      dispatch(
        setWatchedSuccess({
          message: "Course added",
          courseId,
          watched: [videoId],
        })
      );
    } else {
      const databaseWatchedList = [...data.watched[courseId]];
      // check if item is already in the array
      if (!databaseWatchedList.includes(videoId)) {
        // update database with new entry
        const watchedList = [...databaseWatchedList, videoId];
        await setDatabaseData(`${userDBPath}/watched/${courseId}`, watchedList);

        dispatch(
          setWatchedSuccess({
            message: "Course added",
            courseId,
            watched: watchedList,
          })
        );
      } else {
        return;
      }
    }
  };
};

export const removeFromWatched = (courseId, videoId) => {
  return async dispatch => {
    const user = await getCurrentUser();
    if (!user) return dispatch(setWatchedFail("User is not signed in"));
    const userDBPath = `users/${user.uid}`;
    const data = await getDatabaseData(userDBPath);
    if (!data) return dispatch(setWatchedFail("No data could be fetched"));

    // remove unwatched element and update db
    const watchedList = data.watched[courseId];
    const filteredList = watchedList.filter(e => e !== videoId);
    await setDatabaseData(`${userDBPath}/watched/${courseId}`, filteredList);

    // update localstorage
    saveToLocalStorage("course", {
      [courseId]: filteredList,
    });

    dispatch(
      setWatchedSuccess({
        message: "Item removed",
        courseId,
        watched: filteredList,
      })
    );
  };
};

///////
// Get watched course list from db

const fetchSuccess = data => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload: data,
  };
};

const fetchFail = errorMsg => {
  return {
    type: actionTypes.FETCH_FAILED,
    payload: errorMsg,
  };
};

export const getWatchedList = (courseId, userId) => {
  return async dispatch => {
    try {
      // fetch data from database
      let data = await getDatabaseData(`users/${userId}/watched/${courseId}`);
      if (!data) return dispatch(fetchFail("No data fetched"));
      dispatch(fetchSuccess({ watched: data, message: "Data fetched" }));
    } catch (err) {
      dispatch(fetchFail("Could not fetch data"));
    }
  };
};
