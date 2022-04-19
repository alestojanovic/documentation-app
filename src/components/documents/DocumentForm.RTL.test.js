import React from "react";
import { render } from "@testing-library/react";
import DocumentForm from "./DocumentForm";

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
  return render(<DocumentForm {...props} />);
}

it("should render Add Document header", () => {
  const { getByText } = renderDocumentForm();
  getByText("Add Document");
});

it('labels save buttons as "Save" when not saving', () => {
  const { getByText } = renderDocumentForm();
  getByText("Save");
});

it('labels save buttons as "Saving..." when saving', () => {
  const { getByText } = renderDocumentForm({ saving: true });
  getByText("Saving...");
});
