import React from "react";
// import "./App.css";
const App = () => {
  const [val, setVal] = React.useState();
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div className="editor">
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
      />
    </div>
  );
};
export default App;
