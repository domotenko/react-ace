import React from 'react';
import { render } from 'react-dom'
import brace from 'brace';
import 'brace/ext/language_tools';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/mode/javascript';

import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/theme/solarized_light';


function onLoad(editor) {
  console.log('i\'ve loaded');
}

function onChange(newValue) {
  console.log('change', newValue);
}

// Render first editor
render(
  <AceEditor
    mode="java"
    theme="github"
    name="blah1"
    height="6em"
    onChange={onChange}
  />,
  document.getElementById('example')
);

const defaultValue =
`function onLoad(editor) {
  console.log(\"i\'ve loaded\");
}`;

// Render second editor
render(
  <AceEditor
    mode="javascript"
    theme="monokai"
    name="blah2"
    onLoad={onLoad}
    fontSize={14}
    height="6em"
    value={defaultValue}
    editorOptions={{
      enableBasicAutocompletion: true,
      enableSnippets: false,
      enableLiveAutocompletion: true
    }}
  />,
  document.getElementById('example2')
);

global.reloadProps = function() {
  render(
    <AceEditor
      mode="javascript"
      theme="solarized_light"
      name="blah2"
      fontSize={40}
      height="8em"
    />,
    document.getElementById('example2')
  );
};
