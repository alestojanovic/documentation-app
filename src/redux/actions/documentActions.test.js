import * as documentActions from "./documentActions";
import * as types from "./actionTypes";
import { documents } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

//Test as async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Documents Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_DOCUMENTS_SUCCESS when loading documents", () => {
      fetchMock.mock("*", {
        body: documents,
        headers: { "content-type": "application/json" },
      });
      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_DOCUMENTS_SUCCESS, documents },
      ];
      const store = mockStore({ documents: [] });
      return store.dispatch(documentActions.loadDocuments()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("createDocumentSuccess", () => {
  it("should create a CREATE_DOCUMENT_SUCCESS action", () => {
    //Arrange
    const document = documents[0];
    const expectedAction = {
      type: types.CREATE_DOCUMENT_SUCCESS,
      document,
    };

    //Act
    const action = documentActions.createDocumentSuccess(document);

    //Assert
    expect(action).toEqual(expectedAction);
  });
});
