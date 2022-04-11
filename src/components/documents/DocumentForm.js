import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const DocumentForm = ({
  document,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{document.id ? "Edit" : "Add"} Document</h2>
      {errors.onSave && (
        <div className="alert" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={document.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={document.authorId || ""}
        defaultOption="Select Author"
        options={authors.map((author) => ({
          value: author.id,
          text: author.name,
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        value={document.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

DocumentForm.propTypes = {
  document: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default DocumentForm;
