import { combineReducers } from "redux";
import userReducer from "./userReducer";
import courseReducer from "./courseReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer,
  modal: modalReducer,
});

export default rootReducer;
