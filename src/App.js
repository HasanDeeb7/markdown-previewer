import { useState } from "react";
import Preview from "./components/Preview";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./styles/style.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons"



function App() {
  const defaultText = `# here's a Markdown Previewer
  ## this is a sub-heading 
  ### benefits of using markdown:
  - **Simplicity**: Markdown uses a simple and intuitive syntax that is easy to learn and read.
  - **Portability**: Markdown files are plain text files with a .md or .markdown extension.
  - **Widely supported**: Markdown is widely supported across various platforms, tools, and content management systems. 
  - You can surround some code with backticks for example, to appear with a monospace font like \`Print()\`  
   if you like to learn more, go to this [link](https://www.markdownguide.org/)   
   >this is a blockquote.  
   \`\`\`
   // this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' \&\& lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
   \`\`\`
   ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `;
  const setStyle = (
    elemntId,
    property1,
    value1,
    property2 = null,
    value2 = null
  ) => {
    document.getElementById(elemntId).style[property1] = value1;
    if (property2 && value2) {
      document.getElementById(elemntId).style[property2] = value2;
    }
  };
  const [text, setText] = useState(defaultText);
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  const [editorIsShown, setEditorIsShown] = useState(true);
  const [previewIsShown, setPreviewIsShown] = useState(true);

  const handleEditorExpand = () => {
    if (previewIsShown) {
      setStyle("editor", "height", "100vh");
    } else {
      setStyle("editor", "height", "20rem");
    }
    setPreviewIsShown(!previewIsShown);
  };
  const handlePreviewExpand = () => {
    setEditorIsShown(!editorIsShown);
  };
  return (
    <div id="app">
      {editorIsShown && (
        <div id="editor-container">
          <h3 id="editor-header">
            Editor
            <button className="expand-btn" onClick={handleEditorExpand}>
              <FontAwesomeIcon icon="fa-solid fa-expand" />
            </button>
          </h3>

          <textarea
            name="editor"
            id="editor"
            autoFocus
            placeholder="type in and see the preview"
            onChange={handleChange}
            value={text}
          ></textarea>
        </div>
      )}
      {previewIsShown && (
        <Preview onClick={handlePreviewExpand}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Preview>
      )}
    </div>
  );
}

export default App;

library.add(fas);
