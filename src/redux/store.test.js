import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as documentActions from "./actions/documentActions";

it("should handle creating documents", () => {
  //Arrange
  const store = createStore(rootReducer, initialState);
  const document = {
    title: "Clean Code",
  };

  //Act
  const action = documentActions.createDocumentSuccess(document);
  store.dispatch(action);

  //Assert
  const createdDocument = store.getState().documents[0];
  expect(createdDocument).toEqual(document);
});
