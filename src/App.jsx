import React , {useState} from "react";
import Board from "./components/Board.jsx";
import { calculateWinner } from "./helper.jsx";

import "./styles/root.scss"

const App = () =>{

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNextX , setisNextX] = useState(false);

  const winner = calculateWinner(board);

  const message = winner ? `winner is ${winner}` : `${isNextX ? 'X' : 'O'} 's Turn`;

  const handleSquareclick = (position) => {

    // function below avoids repeatation of moves on same squares which already have O or X 
    if(board[position] || winner){
      return;
    }
    
    setBoard( prev => {
      return prev.map((square, pos) => {
        if(pos === position){
          return isNextX ? 'X' : 'O';
        }

        return square;
      });
    });

    setisNextX(prev => !prev)
  };

  

  return(
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board = {board} handleSquareclick = {handleSquareclick} />
    </div>

  )
}

export default App;