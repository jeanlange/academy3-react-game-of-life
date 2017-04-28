import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  render() {
    var grid = [];
    var max = 11;
    var rowNumber, cellNumber;

    //construct logical grid filled with dead cells
    var logicalGrid = [];
    for(rowNumber = 0; rowNumber < max; rowNumber++) {
      logicalGrid[rowNumber] = [];
      for(cellNumber = 0; cellNumber < max; cellNumber++) {
        logicalGrid[rowNumber][cellNumber] = false;
      }
    }

    //set some cells alive
    logicalGrid[5][4] =
      logicalGrid[5][5] =
      logicalGrid[5][6] =
      true;

    //construct the display grid based on logical grid
    for(rowNumber = 0; rowNumber < max; rowNumber++) {
      for(cellNumber = 0; cellNumber < max; cellNumber++) {
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