import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userModal: false,
  courseModal: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_MODAL_TOGGLE:
      return {
        ...state,
        userModal: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
