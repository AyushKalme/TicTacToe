import React , { useState } from 'react'
import Square from "./Square";



const Board = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNextX , setisNextX] = useState(false);

  const handleSquareclick = (position) => {

    // function below avoids repeatation of moves on same squares which already have O or X 
    if(board[position]){
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
  //renders all squares and their valus
  const renderSquare = (position) => {
    return (
      <Square value = {board[position]} onClick = {() => handleSquareclick(position)} />
    );
  };


  return (
    //Board
    <div className='board'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board