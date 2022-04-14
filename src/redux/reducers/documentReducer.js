import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function documentReducer(
  state = initialState.documents,
  action
) {
  switch (action.type) {
    case types.CREATE_DOCUMENT_SUCCESS:
      return [...state, { ...action.document }];
    case types.UPDATE_DOCUMENT_SUCCESS:
      return state.map((document) =>
        document.id === action.document.id ? action.document : document
      );
    case types.LOAD_DOCUMENTS_SUCCESS:
      return action.documents;
    case types.DELETE_DOCUMENT_OPTIMISTIC:
      return state.filter((document) => document.id !== action.document.id);
    default:
      return state;
  }
}
