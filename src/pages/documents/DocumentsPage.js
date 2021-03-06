import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import * as documentActions from "../../redux/actions/documentActions";
import * as authorActions from "../../redux/actions/authorActions";
import DocumentList from "../../components/documents/DocumentList";
import Spinner from "../../components/common/Spinner";
import "./DocumentsPage.css";

const DocumentsPage = ({ documents, authors, actions }) => {
  const history = useHistory();
  const routeChange = () => {
    let path = `/document`;
    history.push(path);
  };
  useEffect(() => {
    if (documents.length === 0) {
      actions.loadDocuments().catch((error) => {
        toast.error("Loading documents failed" + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        toast.error("Loading authors failed" + error);
      });
    }
  }, []);

  const handleDeleteDocument = async (document) => {
    toast.success("Document deleted");
    try {
      await actions.deleteDocument(document);
    } catch (error) {
      toast.error("Delete failed " + error.message, { autoClose: false });
    }
  };

  return (
    <>
      <h2>Documents</h2>
      {authors.length === 0 || documents === 0 ? (
        <Spinner />
      ) : (
        <>
          <button className="add-button" onClick={routeChange}>
            Add Document
          </button>
          <DocumentList
            onDeleteClick={handleDeleteDocument}
            documents={documents}
          />
        </>
      )}
    </>
  );
};

DocumentsPage.propTypes = {
  documents: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    documents:
      state.authors.length === 0
        ? []
        : state.documents.map((document) => {
            return {
              ...document,
              authorName: state.authors.find((a) => a.id === document.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadDocuments: bindActionCreators(
        documentActions.loadDocuments,
        dispatch
      ),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteDocument: bindActionCreators(
        documentActions.deleteDocument,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
