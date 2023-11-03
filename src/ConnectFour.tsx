import { useState } from 'react';

const COLUMNS = 7;
const ROWS = 6;

function App() {
  const [board, setBoard] = useState(Array(COLUMNS).fill(null).map(() => Array(ROWS).fill('')));
  const [currPlayer, setCurrPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<'X' | 'O' | null>(null);

  const handleCellClick = (colIdx: number) => {
    if(winner) return;

    const newBoard = [...board];
    const column = newBoard[colIdx];
    let emptyCellIdx = null;
    for(let i = column.length - 1; i >= 0; i--) {
      if(column[i] === '') {
        emptyCellIdx = i;
        break;
      }
    }
    if (emptyCellIdx) {
      column[emptyCellIdx] = currPlayer;
    }
    setBoard(newBoard);
    if(checkIfPlayerWon(newBoard, currPlayer)) {
      setWinner(currPlayer);
    }
    setCurrPlayer(prev => prev === 'X' ? 'O' : 'X');
  }

  const checkIfPlayerWon = (gameBoard: string[][], currentPlayer: string) => {
    // check horizontal
    for(let i = 0; i < ROWS; i++) {
      for(let j = 0; j < COLUMNS - 3; j++) {
        if(gameBoard[j][i] === currentPlayer && gameBoard[j + 1][i] === currentPlayer && gameBoard[j + 2][i] === currentPlayer && gameBoard[j + 3][i] === currentPlayer) {
          return true;
        }
      }
    }

    // check vertical
    for(let i = 0; i < COLUMNS; i++) {
      for(let j = 0; j < ROWS - 3; j++) {
        if(gameBoard[i][j] === currentPlayer && gameBoard[i][j + 1] === currentPlayer && gameBoard[i][j + 2] === currentPlayer && gameBoard[i][j + 3] === currentPlayer) {
          return true;
        }
      }
    }

    // check diagonals
    for(let i = 0; i < COLUMNS - 3; i++) {
      for(let j = 0; j < ROWS - 3; j++) {
        if(gameBoard[i][j] === currentPlayer && gameBoard[i + 1][j + 1] === currentPlayer && gameBoard[i + 2][j + 2] === currentPlayer && gameBoard[i + 3][j + 3] === currentPlayer) {
          return true;
        }
      }
    }

    for(let i = 0; i < COLUMNS - 3; i++) {
      for(let j = 3; j < ROWS; j++) {
        if(gameBoard[i][j] === currentPlayer && gameBoard[i + 1][j - 1] === currentPlayer && gameBoard[i + 2][j - 2] === currentPlayer && gameBoard[i + 3][j - 3] === currentPlayer) {
          return true;
        }
      }
    }

    return false;
  }

  const evaluateBackground = (rowVal: string) => {
    if(rowVal === 'X') {
      return 'red';
    } else if(rowVal === 'O') {
      return 'blue';
    } else {
      return '';
    }
  }

  return (
    <>
      <div style={{display: 'flex', gap: '10px'}}>
        {board.map((column, colIdx) => (
          <div key={colIdx} style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {column.map((row, rowIdx) => (
              <div key={rowIdx} style={{ width: '40px', height: '40px', border: 'solid 1px black', background: evaluateBackground(row)}} onClick={() => handleCellClick(colIdx)}></div>
            ))}
          </div>
        ))}
        {winner && <div style={{ width: '40px', height: '40px', border: 'solid 1px black'}}>Winner is {winner}</div>}
      </div>
    </>
  )
}

export default App;
