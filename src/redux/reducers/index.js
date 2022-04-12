import { combineReducers } from "redux";
import documents from "./documentReducer";
import authors from "./authorReducer";
import apiCallStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  documents,
  authors,
  apiCallStatusReducer,
});

export default rootReducer;
