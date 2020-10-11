import React from 'react';

class TextEditor extends React.Component {

  state = {
    wordInput: '',
    textField: []
  }

  handleOnChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      wordInput: e.target.value
    })
  }

  handleAppendOnClick = () => {
    // debugger
    console.log("handleAppendOnClick", this.state.textField.length > 0)
    if (this.state.textField.length > 0) {
      this.state.textField.push(' ' + this.state.wordInput)
    } else {
      this.state.textField.push(this.state.wordInput)
    }
    this.setState({
      // textField: this.state.textField + ' ' + this.state.wordInput,
      wordInput: ''
    })
  }

  handleUndoOnClick = () => {
    // debugger
    console.log("undo", this.state.textField)
    let textArray = this.state.textField
    textArray.pop()
    this.setState({
      textField: textArray
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input onChange={this.handleOnChange} value={this.state.wordInput} className="word-input" type="text" data-testid="word-input" />
          {/* {this.state.wordInput ? <button onClick={this.handleAppendOnClick}  data-testid="append-button">Append</button> : <button onClick={this.handleAppendOnClick}  data-testid="append-button">Append</button> }  */}
          <button onClick={this.handleAppendOnClick} data-testid="append-button" disabled={!this.state.wordInput}>Append</button>
          <button onClick={this.handleUndoOnClick} data-testid="undo-button" disabled={!this.state.textField.length}>Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">{this.state.textField}</div>
      </React.Fragment>
    );
  }
}

export default TextEditor;




// class TextEditor extends React.Component {

//   state = {
//     wordInput: '',
//     textField: ''
//   }

//   handleOnChange = (e) => {
//     console.log(e.target.value)
//     this.setState({
//       wordInput: e.target.value
//     })
//   }

//   handleAppendOnClick = () => {
//     // console.log("handleAppendOnClick", this.state.wordInput)
//     this.setState({
//       textField: this.state.textField + ' ' + this.state.wordInput,
//       wordInput: ''
//     })
//   }

//   handleUndoOnClick = () => {
//     console.log("undo", this.state.textField)
//     let textArray = this.state.textField.split(' ')
//     textArray.pop()
//     this.setState({
//       textField: textArray.join(' ')
//     })
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div className="controls">
//           <input onChange={this.handleOnChange} value={this.state.wordInput} className="word-input" type="text" data-testid="word-input" />
//           {/* {this.state.wordInput ? <button onClick={this.handleAppendOnClick}  data-testid="append-button">Append</button> : <button onClick={this.handleAppendOnClick}  data-testid="append-button">Append</button> }  */}
//           <button onClick={this.handleAppendOnClick} data-testid="append-button" disabled={!this.state.wordInput}>Append</button>
//           <button onClick={this.handleUndoOnClick} data-testid="undo-button" disabled={!this.state.textField}>Undo</button>
//         </div>
//         <div className="text-field" data-testid="text-field">{this.state.textField}</div>
//       </React.Fragment>
//     );
//   }
// }

// export default TextEditor;
