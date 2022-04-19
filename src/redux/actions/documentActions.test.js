import * as documentActions from "./documentActions";
import * as types from "./actionTypes";
import { documents } from "../../../tools/mockData";

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
