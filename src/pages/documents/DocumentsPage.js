import React, { useState } from "react";
import "./DocumentsPage.css";

const DocumentsPage = () => {
  const [document, setDocument] = useState({ title: "" });

  const handleChange = (event) => {
    const document = { ...document, title: event.target.value };
    setDocument(document);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(document.title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Documents</h2>
      <label className="input-label">Add Documents</label>
      <span className="input-fields">
        <input
          className="input-field"
          type="text"
          onChange={handleChange}
          value={document.title}
        />
        <input className="submit-button" type="submit" value="Save" />
      </span>
    </form>
  );
};

export default DocumentsPage;
