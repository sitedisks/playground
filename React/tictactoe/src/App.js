import React, { useState } from 'react';
import Board from './components/Board';
import calculateWinner from './functions/calculateWinner';

import './App.css';

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [turn, setTurn] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i) => {

    const t_history = history.slice(0, stepNumber + 1);
    const current = t_history[t_history.length - 1]; // always the latest in the stack
    const t_squares = current.squares.slice(); // temp clone of the latest squares

    let winner = calculateWinner(t_squares);
    if (winner || t_squares[i]) {
      return;
    }

    t_squares[i] = turn ? 'X' : 'O'; // add the new stop to latest square

    setHistory(t_history.concat([{ squares: t_squares }])); // store the latest sqaure to the history stack
    setTurn(!turn);
    setStepNumber(t_history.length);
    console.log(history);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setTurn(step % 2 === 0);
  }

  let message;
  let current = history[stepNumber];
  let winner = calculateWinner(current.squares);

  let moves = history.map((step, index) => {
    console.log('step: ' + step.squares + ', index: ' + index);
    const desc = index ? 'Go to move #' + index : 'Go to game start';
    return (
      <li key={index}>
        <button onClick={() => { jumpTo(index) }}>{desc}</button>
      </li>
    )
  });

  if (winner) {
    message = 'Winner: ' + winner
  }
  else {
    message = "Next player: " + (turn ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board value={current.squares} theClick={(i) => { handleClick(i) }} />
      </div>
      <div className="game-info">
        <div>{message}</div>
        <div><ul>{moves}</ul></div>
      </div>
    </div>
  );
}

export default App;
