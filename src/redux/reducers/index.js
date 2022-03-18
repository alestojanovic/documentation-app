import { combineReducers } from "redux";
import documents from "./documentReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  documents,
  authors,
});

export default rootReducer;
