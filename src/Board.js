import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  render() {
    var grid = [];
    var logicalGrid = this.props.logicalBoard;
    var gridSideLength = logicalGrid.length;
    var rowNumber, cellNumber;

    //construct the display grid based on logical grid
    for(rowNumber = 0; rowNumber < gridSideLength; rowNumber++) {
      for(cellNumber = 0; cellNumber < gridSideLength; cellNumber++) {
        grid.push(
          <Cell
            isAlive={logicalGrid[rowNumber][cellNumber]}
            key={rowNumber + " " + cellNumber}
          />
        );
      }
      grid.push(<br key={rowNumber}/>);
    }

    return (
      <div className="grid">
        {grid}
      </div>
    )
  }
}

export default Board;