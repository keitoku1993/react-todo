import React, { Component } from 'react';
import Title from "./Title.js";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
class App extends Component {
  constructor(){
    super();
    this.state = {
      taskList: [],
      filterType: "all",
    };
  }

  handleAddClick(task){
    const taskList = this.state.taskList;

    taskList.push({
      date: Date.now(),
      completed: false,
      label: task,
    })

    this.setState({
      taskList: taskList
    })

  }

  onChangeTasks(id){
    const tasks = this.state.taskList.map(function(task){
      if(task.id === id){
        task.id = true
      }
      return task;
    })
    this.setState({
      taskList: tasks
    })
  }

  render() {
    return (
      <div>
        <Title />
        <AddTodo taskAdd={task => this.handleAddClick(task)}/>
        <TaskList tasks={this.state.taskList} onChangeTasks={id => this.onChangeTasks(id)} />
      </div>
    );
  }
}

export default App;
