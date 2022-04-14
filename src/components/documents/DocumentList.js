import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./DocumentList.css";

const DocumentList = ({ documents, onDeleteClick }) => (
  <table id="main-table">
    <thead className="table-header">
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {documents.map((document) => {
        return (
          <tr key={document.id}>
            <td>
              <a
                className="read-button"
                href={"http://pluralsight.com/courses/" + document.slug}
              >
                Read
              </a>
            </td>
            <td>
              <Link to={"/document/" + document.slug}>{document.title}</Link>
            </td>
            <td>{document.authorName}</td>
            <td>{document.category}</td>
            <td>
              <button
                className="delete-button"
                onClick={() => onDeleteClick(document)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

DocumentList.propTypes = {
  documents: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default DocumentList;
