import { Utils } from "./utils";

const ajax = require('codex.ajax');

const CodexEditor = require('codex.editor');

/**
 * Load Tools for the Editor
 */
const SimpleImage = require('codex.editor.simple-image');
const Header = require('codex.editor.header');
const List = require('codex.editor.list');
const Quote = require('codex.editor.quote');
const Delimiter = require('codex.editor.delimiter');

let editor;

const save = Utils.debounce(() => {
  editor.saver.save()
    .then((savedData) => {
      ajax.call({
        type: 'POST',
        url: '/',
        data: savedData,
        before: function () {
        },
        progress: function (percentage) {
          console.log(percentage + '%');
          // ...
        },
        success: function (response) {
          console.log(response);
          // window.history.pushState({}, "", response.id);
          // ...
        },
        error: function (response) {
          console.log(response);
          // ...
        },
        after: function () {
        }
      });
    });
}, 2000);

class Writing {

  constructor() {
    editor = null;

    // this.bindSaveButton();
    // this.bindKeydown();
  }

  runEditor() {
      editor = new CodexEditor({
        // holderId: 'codex-editor',
        tools: {
          image: SimpleImage,

          header: {
            class: Header,
            config: {
              placeholder: 'Title'
            }
          },

          list: {
            class: List,
            inlineToolbar: true
          },

          quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author'
            }
          },

          delimiter: Delimiter
        },
        data: {
          blocks: [
            {
              type: "header",
              data: {
                text: "",
                level: 2
              }
            }
          ]
        },
        onReady: Writing.onReady
      });
  };

  static onReady() {
    document.getElementById('codex-editor').classList.remove('hide');
  }

  // static save(immediate = true) {
  //   console.log('saveeeee');
  //   console.log('immediate', immediate);
  //
  // }

  /**
   * @deprecated
   */
  // bindSaveButton() {
  //   let saveButton = document.getElementById('save-button');
  //
  //   saveButton.addEventListener('click', save)
  // }

  bindKeydown() {
    document.addEventListener('keydown', () => {
      console.log('keydown');
      save();
    });
  }
}

module.exports = new Writing();
