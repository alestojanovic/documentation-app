import React from "react";
import DocumentForm from "./DocumentForm";
import { shallow } from "enzyme";

function renderDocumentForm(args) {
  const defaultProps = {
    authors: [],
    document: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<DocumentForm {...props} />);
}

let wrapper = renderDocumentForm();

it("renders form and header", () => {
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Document");
});

it('labels save buttons as "Save" when not saving', () => {
  expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save buttons as "Saving..." when saving', () => {
  const wrapper = renderDocumentForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
