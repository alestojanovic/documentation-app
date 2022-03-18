import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function documentReducer(
  state = initialState.documents,
  action
) {
  switch (action.type) {
    case types.CREATE_DOCUMENT:
      return [...state, { ...action.document }];
    case types.LOAD_DOCUMENTS_SUCCESS:
      return action.documents;
    default:
      return state;
  }
}
