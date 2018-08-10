/**
 * Build CSS
 */
require('../css/index.css');

const writing = require('./writing');

const docReady = (f) => {
  return /in/.test(document.readyState) ? window.setTimeout(docReady, 9, f) : f();
};

docReady(() => {
  const editorData = window.defaultEditorData;

  writing.runEditor(editorData);
});
