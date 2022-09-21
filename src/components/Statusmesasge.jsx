import React from 'react'

const Statusmesasge = ({winner , current}) => {
    // const message = winner ? `winner is ${winner}` : `${current.isNextX ? 'X' : 'O'} 's Turn`;

    const noMovesleft = current.board.every(el => el !== null);

  return (
    <h2>
        {winner && `winner is ${winner}`}
        {!winner && !noMovesleft &&`${current.isNextX ? 'X' : 'O'} 's Turn`}
        {!winner && noMovesleft && "It's a DRAW"}
    </h2>
  )
}

export default Statusmesasge