import React , {useState} from "react";
import Board from "./components/Board.jsx";
import History from "./components/History.jsx";
import Statusmesasge from "./components/Statusmesasge.jsx";
import { calculateWinner } from "./helper.jsx";

import "./styles/root.scss"

const App = () =>{

  const New_Game = [{board : Array(9).fill(null) , isNextX : true},]
  
  const [history , setHistory] = useState(New_Game);
  
  const [currentMove , setcurrentMove] = useState(0);

  const current = history[currentMove];


  const {winner , winningsquares} = calculateWinner(current.board);

  // const message = winner ? `winner is ${winner}` : `${current.isNextX ? 'X' : 'O'} 's Turn`;

  const handleSquareclick = (position) => {

    // function below avoids repeatation of moves on same squares which already have O or X 
    if(current.board[position] || winner){
      return;
    }
    
    setHistory (prev => {

      const last = prev [prev.length - 1];


      const newBoard =  last.board.map((square, pos) => {
        if(pos === position){
          return last.isNextX ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({board : newBoard, isNextX: !last.isNextX})
    });

    setcurrentMove(prev => prev + 1);
  };

  const moveTo = (move) => {
    setcurrentMove(move)
  }

  const new_game = () =>{
    setHistory(New_Game);
    setcurrentMove(0);

  }
  return(
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <Statusmesasge winner ={winner} current = {current} />
      <Board board = {current.board} handleSquareclick = {handleSquareclick} winningsquares = {winningsquares} />
      <button onClick={new_game}>Start New Game</button>
      <History history = {history} moveTo = {moveTo} currentMove ={currentMove} />
    </div>

  )
}

export default App;