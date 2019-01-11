import React, { Component } from 'react';
import Title from "./Title.js";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
import Filter from "./Filter";
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
      id: Date.now(),
      completed: false,
      label: task,
    })

    this.setState({
      taskList: taskList
    })

  }

  onChangeTasks(id){
    const tasks = this.state.taskList.map((task) => {
      if(task.id === id){
        task.completed = !task.completed;
      }
      return task;
    })
    this.setState({
      taskList: tasks
    })
  }

  filterSet(checkValue){
    switch(checkValue){
      case '0':
        this.setState({
          filterType: 'all',
        })
        break;
      case '1':
        this.setState({
          filterType: 'unCompleted',
        })
        break;
      case '2':
        this.setState({
          filterType: 'completed',
        })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Title />
        <AddTodo taskAdd={task => this.handleAddClick(task)}/>
        <TaskList tasks={this.state.taskList} onChangeTasks={id => this.onChangeTasks(id)} filterType={this.state.filterType}/>
        <Filter filterType={this.state.filterType} filterSet={(checkValue)=>this.filterSet(checkValue)}/>
      </div>
    );
  }
}

export default App;
