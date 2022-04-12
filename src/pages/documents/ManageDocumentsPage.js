import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadDocuments } from "../../redux/actions/documentActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import DocumentForm from "../../components/documents/DocumentForm";
import { newDocument } from "../../../tools/mockData";
// import "./ManageDocumentsPage.css";

const ManageDocumentsPage = ({
  documents,
  authors,
  loadAuthors,
  loadDocuments,
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

  return <DocumentForm document={document} errors={errors} authors={authors} />;
};

ManageDocumentsPage.propTypes = {
  document: PropTypes.object.isRequired,
  documents: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadDocuments: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageDocumentsPage);
