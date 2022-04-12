import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  loadDocuments,
  saveDocument,
} from "../../redux/actions/documentActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import DocumentForm from "../../components/documents/DocumentForm";
import { newDocument } from "../../../tools/mockData";

const ManageDocumentsPage = ({
  documents,
  authors,
  loadAuthors,
  loadDocuments,
  saveDocument,
  ...props
}) => {
  const [document, setDocument] = useState({ ...props.document });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (documents.length === 0) {
      loadDocuments().catch((error) => {
        alert("Loading documents failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDocument((prevDocument) => ({
      ...prevDocument,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    saveDocument(document);
  };

  return (
    <DocumentForm
      document={document}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

ManageDocumentsPage.propTypes = {
  document: PropTypes.object.isRequired,
  documents: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadDocuments: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveDocument: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    document: newDocument,
    documents: state.documents,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadDocuments,
  loadAuthors,
  saveDocument,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageDocumentsPage);
