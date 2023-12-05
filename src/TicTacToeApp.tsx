import './App.css';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
  const [player, setPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (rowIndex: number, cellIndex: number) => {
    if (board[rowIndex][cellIndex] !== null || gameOver) {
      return;
    }
    const newBoard = [...board];
    newBoard[rowIndex][cellIndex] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
    checkGameOver(newBoard);
  }

  const checkGameOver = (board: string[][]) => {
    const winner = calculateWinner(board);
    if (winner) {
      alert(`${winner} has won the game!`);
      setGameOver(true);
    } else if (board.every(row => row.every(cell => cell !== null))) {
      alert('Game is a draw!');
      setGameOver(true);
    }
  }

  const resetGame = () => {
    setBoard(Array(3).fill(null).map(() => Array(3).fill(null)));
    setPlayer('X');
    setGameOver(false);
  }

  const calculateWinner = (board: string[][]) => {
    const lines = [
      [[0, 0], [0, 1], [0, 2]], // rows
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]], // columns
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]], // diagonals
      [[0, 2], [1, 1], [2, 0]]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [[a, b], [c, d], [e, f]] = lines[i];
      if (board[a][b] && board[a][b] === board[c][d] && board[a][b] === board[e][f]) {
        return board[a][b];
      }
    }
    return null;
  }

  return (
    <div className='flex gap-2'>
      <h2 id="currentPlayer">Current Player: {player}</h2>
      <button onClick={resetGame}>Reset Game</button>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className='flex flex-col gap-2'>
          {row.map((cell, cellIndex) => (
            <button key={cellIndex} className="cell w-20 h-20 border flex items-center justify-center" onClick={() => handleClick(rowIndex, cellIndex)} aria-labelledby="currentPlayer" aria-live="polite">
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
