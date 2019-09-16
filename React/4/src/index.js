import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
// /*
//   constructor(props) {
//     super(props);

//     this.clickIt = this.clickIt.bind(this);
//   }

//   clickIt() {

//     this.props.dfdf();
//   }
// */
//   render() {
//     return (
//       // <button className="square" onClick={()=>this.props.dfdf()}>
//       <button className="square" onClick={this.props.dfdf}>
//         {this.props.vvv}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={() => props.dfdf()}>
      {props.vvv}
    </button>
  );
}

class Board extends React.Component {

  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };

  }

  handleClick(i) {
    // console.log('Board click handler');
    const squares = this.state.squares.slice();
    let isWin = calculateWinner(squares);
    // console.log(isWin);
    // console.log(squares[i]);
    if (isWin || squares[i]) {
      console.log('big')
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
   
  }

  renderSquare(i) {
    return <Square vvv={this.state.squares[i]} dfdf={() => this.handleClick(i)} />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  // console.log(squares);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // console.log(lines[i]);
    // console.log(squares[a]);
    // console.log(squares[b]);
    // console.log(squares[c]);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
