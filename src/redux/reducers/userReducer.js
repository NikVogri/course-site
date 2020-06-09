import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  token: null,
  userName: null,
  userId: null,
  errorMsg: "",
  isLoading: false,
  userImage: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.name,
        userId: action.payload.id,
        isLoading: false,
        isLoggedIn: true,
        userImage: action.payload.userImage,
        errorMsg: "",
      };
    case actionTypes.CREATE_USER_FAIL:
      return {
        ...state,
        errorMsg: action.payload,
        isLoading: false,
      };
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        userName: action.payload.name,
        userId: action.payload.id,
        userImage: action.payload.userImage,
        isLoading: false,
        isLoggedIn: true,
        errorMsg: "",
      };
    case actionTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        errorMsg: action.payload,
        isLoading: false,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        userName: null,
        userId: null,
      };
    case actionTypes.SET_AVATAR_IMAGE_FAIL:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case actionTypes.SET_AVATAR_IMAGE_SUCCESS: {
      return {
        ...state,
        userImage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
