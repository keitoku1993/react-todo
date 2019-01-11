import React, { Component } from 'react';

import '../stylesheet/filter.css'
import TaskList from './TaskList';

class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      allIsChecked: true,
      unCompletedIsChecked: false,
      completedIsChecked: false,
    };
  }

  handleRadioClick(checkValue){
    switch(checkValue){
      case '0':
        this.props.filterSet(checkValue);
        this.setState({
          allIsChecked: true,
          unCompletedIsChecked: false,
          completedIsChecked: false,
        })
        break;
      case '1':
        this.props.filterSet(checkValue);
        this.setState({
          allIsChecked: false,
          unCompletedIsChecked: true,
          completedIsChecked: false,
        })
        break;
      case '2':
        this.props.filterSet(checkValue);
        this.setState({
          allIsChecked: false,
          unCompletedIsChecked: false,
          completedIsChecked: true,
        })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="radio02">
        <input type="radio" name="radio02" className="radio02-input" id="radio02-01" value='0' checked={this.state.allIsChecked} onChange={e=>this.handleRadioClick(e.target.value)}/>
        <label for="radio02-01">すべて</label>
        <input type="radio" name="radio02" className="radio02-input" id="radio02-02" value='1' checked={this.state.unCompletedIsChecked} onChange={e=>this.handleRadioClick(e.target.value)}/>
        <label for="radio02-02">未完了</label>
        <input type="radio" name="radio02" className="radio02-input" id="radio02-03" value='2' checked={this.state.completedIsChecked} onChange={e=>this.handleRadioClick(e.target.value)}/>
        <label for="radio02-03">完了</label>
      </div>
    );
  }
}

export default Filter;
