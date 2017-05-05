import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.gridSideLength = 25;
    this.delay = 200;
    this.state = {
      currentBoard: this.initialBoard()
    }
    this.updateBoard = this.updateBoard.bind(this);
    this.enlivenCell = this.enlivenCell.bind(this);
    setTimeout(this.updateBoard, this.delay);
  }

  updateBoard() {
    var tempBoard = this.emptyBoard();
    //for each position in tempBoard
      //count its live neighbors
      //if currently alive
        //and 2/3 neighbors, place as alive in temp board
        //else place as dead in temp board
      //if current dead
        //and 3 neighbors, place as alive
        //else place as dead
    var liveNeighborCount = 0;
    var currentBoard = this.state.currentBoard;
    for(var rowNumber = 0; rowNumber < this.gridSideLength; rowNumber++) {
      for(var cellNumber = 0; cellNumber < this.gridSideLength; cellNumber++) {
        //count the neighbors
        liveNeighborCount = 0;
        if (currentBoard[rowNumber][cellNumber + 1]) {
          liveNeighborCount++;
        }
        if (currentBoard[rowNumber][cellNumber - 1]) {
          liveNeighborCount++;
        }
        if (rowNumber < this.gridSideLength - 1) {
          if (currentBoard[rowNumber + 1][cellNumber + 1]) {
            liveNeighborCount++;
          }
          if (currentBoard[rowNumber + 1][cellNumber - 1]) {
            liveNeighborCount++;
          }
          if (currentBoard[rowNumber + 1][cellNumber]) {
            liveNeighborCount++;
          }
        }
        if (rowNumber > 0) {
          if (currentBoard[rowNumber - 1][cellNumber + 1]) {
            liveNeighborCount++;
          }
          if (currentBoard[rowNumber - 1][cellNumber - 1]) {
            liveNeighborCount++;
          }
          if (currentBoard[rowNumber - 1][cellNumber]) {
            liveNeighborCount++;
          }
        }

        //set cells to live or dead based on rules
        if(currentBoard[rowNumber][cellNumber]) {
          if(liveNeighborCount === 2 || liveNeighborCount === 3) {
            tempBoard[rowNumber][cellNumber] = true;
          }
        } else {
          if(liveNeighborCount === 3) {
            tempBoard[rowNumber][cellNumber] = true;
          }
        }
      }
    }
    this.setState({currentBoard: tempBoard});
    setTimeout(this.updateBoard, this.delay);
  }

  emptyBoard() {
    var logicalGrid = [];
    for(var rowNumber = 0; rowNumber < this.gridSideLength; rowNumber++) {
      logicalGrid[rowNumber] = [];
      for(var cellNumber = 0; cellNumber < this.gridSideLength; cellNumber++) {
        logicalGrid[rowNumber][cellNumber] = false;
      }
    }
    return logicalGrid;
  }

  initialBoard() {
    //construct logical grid filled with dead cells
    var logicalGrid = this.emptyBoard();

    // //set some cells alive
    // //blinker in the middle
    // logicalGrid[5][4] =
    //   logicalGrid[5][5] =
    //   logicalGrid[5][6] =
    //   true;
    //
    // //square in the upper left
    // logicalGrid[1][1] =
    //   logicalGrid[1][2] =
    //   logicalGrid[2][1] =
    //   logicalGrid[2][2] =
    //   true;

    //glider
    logicalGrid[2][2] = true;
    logicalGrid[2][3] = true;
    logicalGrid[2][4] = true;
    logicalGrid[1][4] = true;
    logicalGrid[0][3] = true;

    //4 blinkers eventually
    logicalGrid[4][20] = true;
    logicalGrid[4][21] = true;
    logicalGrid[4][22] = true;
    logicalGrid[5][21] = true;
    return logicalGrid;
  }

  enlivenCell(rowNumber, cellNumber) {
    var tempBoard = this.state.currentBoard;
    tempBoard[rowNumber][cellNumber] = true;
    this.setState({currentBoard: tempBoard});
  }

  render() {
    return (      
      <div className="App">
      <Board logicalBoard={this.state.currentBoard} enlivenCell={this.enlivenCell}/>
      </div>
    );
  }
}

export default App;
