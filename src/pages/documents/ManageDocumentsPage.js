import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  loadDocuments,
  saveDocument,
} from "../../redux/actions/documentActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import DocumentForm from "../../components/documents/DocumentForm";
import { newDocument } from "../../../tools/mockData";
import Spinner from "../../components/common/Spinner";

const ManageDocumentsPage = ({
  documents,
  authors,
  loadAuthors,
  loadDocuments,
  saveDocument,
  history,
  ...props
}) => {
  const [document, setDocument] = useState({ ...props.document });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (documents.length === 0) {
      loadDocuments().catch((error) => {
        toast.error("Loading documents failed" + error);
      });
    } else {
      setDocument({ ...props.document });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        toast.error("Loading documents failed" + error);
      });
    }
  }, [props.document]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDocument((prevDocument) => ({
      ...prevDocument,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  };

  const formIsValid = () => {
    const { title, authorId, category } = document;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!authorId) errors.author = "Author is required.";
    if (!category) errors.category = "Category is required.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveDocument(document)
      .then(() => {
        toast.success("Document saved.");
        history.push("/documents");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  };

  return authors.length === 0 || documents === 0 ? (
    <Spinner />
  ) : (
    <DocumentForm
      document={document}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
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
  history: PropTypes.object.isRequired,
};

export function getDocumentBySlug(documents, slug) {
  return documents.find((document) => document.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const document =
    slug && state.documents.length > 0
      ? getDocumentBySlug(state.documents, slug)
      : newDocument;
  return {
    document,
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
