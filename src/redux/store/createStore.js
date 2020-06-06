import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const createStore = () =>
  reduxCreateStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default createStore;
