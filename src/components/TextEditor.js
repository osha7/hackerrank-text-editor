import React from 'react';

class TextEditor extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" type="text" data-testid="word-input" />
          <button data-testid="append-button">Append</button>
          <button data-testid="undo-button">Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">REPLACE ME WITH CURRENT TEXT CONTENT</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
