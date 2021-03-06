import React, { Component } from 'react';

import '../stylesheet/addtodo.css';

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleTextChange(event){
    const inputText = event.target.value;
    this.setState({
      inputText: inputText
    });
  }

  taskAddClick(event){
    if(this.state.inputText !== ''){
      const task = this.state.inputText;
      this.props.taskAdd(task);
      this.setState({
        inputText: ''
    })}else{
      alert("タスクを入力せい");
    }
  }

  render() {
    return (
      <div className="addtodo-wrapper">
        <input className="addtodo-form" type="text" onChange={e=>this.handleTextChange(e)} value={this.state.inputText} placeholder="タスクを入力してね" />
        <button className="addtodo-btn" onClick={e=>this.taskAddClick(e)}>追加</button>
      </div>
    );
  }
}

export default AddTodo;
