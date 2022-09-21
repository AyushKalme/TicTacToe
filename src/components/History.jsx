import React from 'react'

function History({history , moveTo , currentMove}) {
  return (
    <div className='history-wrapper'>
        <ul className='history'>
            {history.map((_, move)=>{
                return(
                    <li key = {move}>
                        <button className={`btn-move ${move === currentMove ? 'active' : ''}`} onClick={() => {moveTo(move)}}> 
                            {move === 0 ? 'go to game start' : `move ${move}`} 
                        </button>
                    </li>
                )
            })}
        </ul>
    </div>
  );
};

export default History