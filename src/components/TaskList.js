import React, { Component } from 'react';

import '../stylesheet/tasklist.css';

class TaskList extends Component {
  render() {
    const items = this.props.tasks;
    let filteredItems = [];
    switch(this.props.filterType){
      case 'all':
        filteredItems = items;
        break;
      case 'unCompleted':
        for(var i = 0; i < items.length; i++){
          if(items[i].completed){
          }else{
            filteredItems.push(items[i]);
          }
        }
        break;
      case 'completed':
        for(var j = 0; j < items.length; j++){
          if(items[j].completed){
            filteredItems.push(items[j]);
          }
        }
        break;
      default:
        break;
    }
    const renderList = filteredItems.map((task) => {
      return(
        <li className="tasklist-item" key={task.id}>
          <input name="checkbox01[]" className="checkbox01-input" type="checkbox" checked={task.completed} />
          <span className="checkbox01-parts" onClick={e => this.props.onChangeTasks(task.id)}>{task.label}</span>
        </li>
      );
    })
    return (
      <ul className="tasklist checkbox01">{renderList}</ul>
    );
  }
}

export default TaskList;
