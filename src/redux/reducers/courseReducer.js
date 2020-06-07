import * as actionTypes from "../actions/actionTypes";

const initialState = {
  message: "",
  courseId: "",
  watched: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COURSE_TO_USER_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case actionTypes.COURSE_ADD_TO_USER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        courseId: action.payload.courseId,
      };

    case actionTypes.SET_WATCHED_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        courseId: action.payload.courseId,
        watched: action.payload.watched,
      };
    case actionTypes.SET_WATCHED_FAIL:
      return {
        ...state,
        message: action.payload,
      };

    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        courseId: action.payload.courseId,
        watched: action.payload.watched,
      };
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
