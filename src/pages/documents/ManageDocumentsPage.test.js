import React from "react";
import { mount } from "enzyme";
import { authors, newDocument, documents } from "../../../tools/mockData";
import { ManageDocumentsPage } from "./ManageDocumentsPage";

function render(args) {
  const defaultProps = {
    authors,
    documents,
    history: {},
    saveDocument: jest.fn(),
    loadAuthors: jest.fn(),
    loadDocuments: jest.fn(),
    document: newDocument,
    match: {},
  };

  const props = { ...defaultProps, ...args };
  return mount(<ManageDocumentsPage {...props} />);
}

it("sets error when attempting to save an emprty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
