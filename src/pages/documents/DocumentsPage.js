import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import * as documentActions from "../../redux/actions/documentActions";
import "./DocumentsPage.css";

const DocumentsPage = ({ documents }) => {
  const dispatch = useDispatch();
  const [document, setDocument] = useState({ title: "" });

  const handleChange = (event) => {
    const document = { ...document, title: event.target.value };
    setDocument(document);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(documentActions.createDocument(document));
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
      {documents.map((document) => (
        <div key={document.title}>{document.title}</div>
      ))}
    </form>
  );
};

DocumentsPage.propTypes = {
  documents: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    documents: state.documents,
  };
}

export default connect(mapStateToProps)(DocumentsPage);
