import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/documents/";

export function getDocuments() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveDocument(document) {
  return fetch(baseUrl + (document.id || ""), {
    method: document.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(document),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDocument(documentId) {
  return fetch(baseUrl + documentId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
