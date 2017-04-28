import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  render() {
    var grid = [];
    var max = 11;
    
    for(var rowNumber = 0; rowNumber < max; rowNumber++) {
      for(var cellNumber = 0; cellNumber < max; cellNumber++) {
        if(rowNumber == 5 && (cellNumber == 4 || cellNumber == 5 || cellNumber == 6)) {
          grid.push(<Cell alive={true} key={rowNumber + " " + cellNumber}/>);
        } else {
          grid.push(<Cell alive={false} key={rowNumber + " " + cellNumber}/>);
        }
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