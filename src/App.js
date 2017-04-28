import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.gridSideLength = 11;
  }

  logicalBoard() {
    //construct logical grid filled with dead cells
    var logicalGrid = [];
    for(var rowNumber = 0; rowNumber < this.gridSideLength; rowNumber++) {
      logicalGrid[rowNumber] = [];
      for(var cellNumber = 0; cellNumber < this.gridSideLength; cellNumber++) {
        logicalGrid[rowNumber][cellNumber] = false;
      }
    }

    //set some cells alive
    logicalGrid[5][4] =
      logicalGrid[5][5] =
      logicalGrid[5][6] =
      true;

    return logicalGrid;
  }

  render() {
    return (      
      <div className="App">
        <Board logicalBoard={this.logicalBoard()}/>
      </div>
    );
  }
}

export default App;
