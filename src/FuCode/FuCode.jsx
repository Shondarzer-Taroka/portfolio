// import React from 'react';
// import CodeMirror from "@uiw/react-codemirror";
// import { vscodeDark } from "@uiw/codemirror-theme-vscode";
// const FuCode = () => {
//     const code = "console.log('Code Mirror!');";
//     return (
//         <div>
//             <CodeMirror
//                 value={code}
//                 height="100px"
//                 theme={vscodeDark}
//             />
//         </div>
//     );
// };

// export default FuCode;

import { CodeiumEditor, Document, Language } from "@codeium/react-code-editor";

export const JavaScriptEditorWithContext = () => {
  const html = `<html>
  <body>
    <h1>Contact Us</h1>
    <form>
      <label>Name:</label>
      <input id="name" type="text" />
      <label>Email:</label>
      <input id="email" type="text" />
    </form>
  </body>
</html>`;

  return (
    <div>
      <p>This editor has context awareness of a neighboring HTML file and can provide better autocompletion suggestions.</p>
      <CodeiumEditor
        language="javascript"
        theme="vs-dark"
        otherDocuments={[
          new Document({
            absolutePath: "/app/index.html",
            relativePath: "index.html",
            text: html,
            editorLanguage: "html",
            language: Language.HTML,
          }),
        ]}
      />
    </div>
  );
};