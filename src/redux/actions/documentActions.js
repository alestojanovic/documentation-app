import * as types from "./actionTypes";
import * as documentApi from "../../api/documentApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDocumentSuccess(documents) {
  return { type: types.LOAD_DOCUMENTS_SUCCESS, documents };
}

export function updateDocumentSuccess(document) {
  return { type: types.UPDATE_DOCUMENT_SUCCESS, document };
}

export function createDocumentSuccess(document) {
  return { type: types.CREATE_DOCUMENT_SUCCESS, document };
}

export function deleteDocumentOptimistic(document) {
  return { type: types.DELETE_DOCUMENT_OPTIMISTIC, document };
}

export function loadDocuments() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return documentApi
      .getDocuments()
      .then((documents) => {
        dispatch(loadDocumentSuccess(documents));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveDocument(document) {
  // eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return documentApi
      .saveDocument(document)
      .then((savedDocument) => {
        document.id
          ? dispatch(updateDocumentSuccess(savedDocument))
          : dispatch(createDocumentSuccess(savedDocument));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteDocument(document) {
  return function (dispatch) {
    dispatch(deleteDocumentOptimistic(document));
    return documentApi.deleteDocument(document.id);
  };
}
