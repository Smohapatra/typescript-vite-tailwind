import './App.css';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
  const [player, setPlayer] = useState('X');

  const handleClick = (rowIndex: number, cellIndex: number) => {
    if (board[rowIndex][cellIndex] !== null) {
      return;
    }
    const newBoard = [...board];
    newBoard[rowIndex][cellIndex] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
    isGameOver(newBoard);
  }

  const isGameOver = (board: string[][]) => {
    const winner = calculateWinner(board);
    if (winner) {
      alert(`${winner} has won the game!`);
    }
  }

  const calculateWinner = (board: string[][]) => {
    const winningLines = [
      // Horizontal
      [board[0][0], board[0][1], board[0][2]],
      [board[1][0], board[1][1], board[1][2]],
      [board[2][0], board[2][1], board[2][2]],

      // Vertical
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],

      // Diagonal
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (a && a === b && a === c) {
        return a;
      }
    }

    return null;
  }

  return (
    <div className='flex gap-2'>
      Current Player: {player}
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className='flex flex-col gap-2'>
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="cell w-20 h-20 border flex items-center justify-center" onClick={() => handleClick(rowIndex, cellIndex)}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
