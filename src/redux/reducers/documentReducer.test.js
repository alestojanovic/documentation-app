import documentReducer from "./documentReducer";
import * as actions from "../actions/documentActions";

it("should add document when passed CREATE_DOCUMENT_SUCCESS", () => {
  //Arrange
  const initialState = [{ title: "A" }, { title: "B" }];
  const newDocument = { title: "C" };
  const action = actions.createDocumentSuccess(newDocument);

  //Act
  const newState = documentReducer(initialState, action);

  //Assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update document when passed UPDATE_DOCUMENT_SUCCESS", () => {
  //Arrange
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" },
  ];

  const document = { id: 2, title: "New Title" };
  const action = actions.updateDocumentSuccess(document);

  //Act
  const newState = documentReducer(initialState, action);
  const updatedDocument = newState.find((a) => a.id == document.id);
  const untouchedDocument = newState.find((a) => a.id == 1);

  //Assert
  expect(updatedDocument.title).toEqual("New Title");
  expect(untouchedDocument.title).toEqual("A");
  expect(newState.length).toEqual(3);
});
