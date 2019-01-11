import React, { Component } from 'react';

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
      <div>
        <p>フィルター</p>
        <input type="radio" value='0' checked={this.state.allIsChecked} onChange={e=>this.handleRadioClick(e.target.value)}/>すべて
        <input type="radio" value='1' checked={this.state.unCompletedIsChecked} onChange={e=>this.handleRadioClick(e.target.value)}/>未完了
        <input type="radio" value='2' checked={this.state.completedIsChecked} onChange={e=>this.handleRadioClick(e.target.value)}/>完了
      </div>
    );
  }
}

export default Filter;
