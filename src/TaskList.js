import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    const items = this.props.tasks.map(function(value){
      return(
        <li key={value.id}>
          <input type="checkbox" checked={value.completed} onChange={e => this.props.onChangeTasks(value.id)}/>
          {value.label}
        </li>
      )
    })
    return (
      <ul>{items}</ul>
    );
  }
}

export default TaskList;
