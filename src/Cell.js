import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  // constructor(props) {
  //   super(props);
  //   this.liveClass = this.liveClass.bind(this);
  // }
  
  liveClass() {
    return this.props.isAlive ? "live" : "dead";
  }
  
  render() {
    return (
      <span onClick={() => {this.props.enlivenCell(this.props.rowNumber, this.props.cellNumber)}} className={"cell " + this.liveClass()}/>
    )
  }
}

export default Cell;