import * as types from "./actionTypes";
import * as documentApi from "../../api/documentApi";

export function createDocument(document) {
  return { type: types.CREATE_DOCUMENT, document };
}

export function loadDocumentSuccess(documents) {
  return { type: types.LOAD_DOCUMENTS_SUCCESS, documents };
}

export function loadDocuments() {
  return function (dispatch) {
    return documentApi
      .getDocuments()
      .then((documents) => {
        dispatch(loadDocumentSuccess(documents));
      })
      .catch((error) => {
        throw error;
      });
  };
}
