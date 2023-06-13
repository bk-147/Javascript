import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isX, setIsX] = useState(true)
  function click(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    let newSquares = squares.slice()
    if (isX) { newSquares[i] = 'X' }
    else { newSquares[i] = 'O' }

    setIsX(!isX)

    setSquares(newSquares)


  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isX ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className='tictac'>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => click(0)} />
          <Square value={squares[1]} onSquareClick={() => click(1)} />
          <Square value={squares[2]} onSquareClick={() => click(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => click(3)} />
          <Square value={squares[4]} onSquareClick={() => click(4)} />
          <Square value={squares[5]} onSquareClick={() => click(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => click(6)} />
          <Square value={squares[7]} onSquareClick={() => click(7)} />
          <Square value={squares[8]} onSquareClick={() => click(8)} />
        </div>
        <button onClick={() => window.location.reload()}>Refresh Page</button>
      </div>
    </>
  );
}

function Square({ value, onSquareClick }) {

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );

}

export default App;
