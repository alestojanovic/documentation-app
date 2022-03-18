import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as documentActions from "../../redux/actions/documentActions";
import DocumentList from "../../components/documents/showDocuments/DocumentList";
import "./DocumentsPage.css";

const DocumentsPage = ({ documents, actions }) => {
  useEffect(() => {
    actions.loadDocuments().catch((error) => {
      alert("Loading documents failed" + error);
    });
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
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    documents: state.documents,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadDocuments: bindActionCreators(
        documentActions.loadDocuments,
        dispatch
      ),
      // loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
