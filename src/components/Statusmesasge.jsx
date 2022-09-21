import React from 'react'

const Statusmesasge = ({winner , current}) => {
    // const message = winner ? `winner is ${winner}` : `${current.isNextX ? 'X' : 'O'} 's Turn`;

    const noMovesleft = current.board.every(el => el !== null);

  return (
    <div className='status-message'>
      {winner && <>
        winner is {' '} <span className={winner ===  'X' ? 'text-green' : 'text-orange'}>{winner}</span>
      </>}
      {!winner && !noMovesleft && (
        <>
          Next player is {' '} <span className= {current.isNextX ? 'text-green' : 'text-orange'}> {current.isNextX ? 'X' : 'O'}</span>
        </>
      )}
      {!winner && noMovesleft && (
        <>
          It is a {' '} <span style={{color: 'red'}} > DRAW </span>
        </>
      )}
    </div >
  )
}

export default Statusmesasge