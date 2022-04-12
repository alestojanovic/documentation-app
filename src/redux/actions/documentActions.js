import * as types from "./actionTypes";
import * as documentApi from "../../api/documentApi";

export function loadDocumentSuccess(documents) {
  return { type: types.LOAD_DOCUMENTS_SUCCESS, documents };
}

export function updateDocumentSuccess(document) {
  return { type: types.UPDATE_DOCUMENT_SUCCESS, document };
}

export function createDocumentSuccess(document) {
  return { type: types.CREATE_DOCUMENT_SUCCESS, document };
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

export function saveDocument(document) {
  return function (dispatch, getState) {
    return documentApi
      .saveDocument(document)
      .then((savedDocument) => {
        document.id
          ? dispatch(updateDocumentSuccess(savedDocument))
          : dispatch(createDocumentSuccess(savedDocument));
      })
      .catch((error) => {
        throw error;
      });
  };
}
