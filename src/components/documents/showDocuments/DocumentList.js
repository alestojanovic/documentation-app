import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./DocumentList.css";

const DocumentList = ({ documents }) => (
  <table id="main-table">
    <thead className="table-header">
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {documents.map((document) => {
        return (
          <tr key={document.id}>
            <td>
              <a
                className="watch-button"
                href={"http://pluralsight.com/courses/" + document.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/document/" + document.slug}>{document.title}</Link>
            </td>
            <td>{document.authorName}</td>
            <td>{document.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

DocumentList.propTypes = {
  documents: PropTypes.array.isRequired,
};

export default DocumentList;
