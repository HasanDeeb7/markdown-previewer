
import React from "react";
import ReactMarkdown from "react-markdown";
import "../styles/style.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);


function Preview({ onClick, children }) {
  return (
    <div id="preview-container">
      <h3 id="preview-header">
        Preview
        <button className="expand-btn" onClick={onClick}>
          <FontAwesomeIcon icon="fa-solid fa-expand" />
        </button>
      </h3>
      <div name="preview" id="preview">
        {children}
      </div>
    </div>
  );
}

export default Preview;
