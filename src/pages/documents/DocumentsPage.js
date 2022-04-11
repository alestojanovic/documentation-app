import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../redux/actions/documentActions";
import * as authorActions from "../../redux/actions/authorActions";
import DocumentList from "../../components/documents/showDocuments/DocumentList";
import "./DocumentsPage.css";

const DocumentsPage = ({ documents, authors, actions }) => {
  useEffect(() => {
    if (documents.length === 0) {
      actions.loadDocuments().catch((error) => {
        alert("Loading documents failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Documents</h2>
      <DocumentList documents={documents} />
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
