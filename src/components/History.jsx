import React from 'react'

function History({history , moveTo , currentMove}) {
  return (
    <ul>
        {history.map((_, move)=>{
            return(
                <li key = {move}>
                    <button onClick={() => {moveTo(move)}} style = {{fontWeight : move === currentMove ? 'bold' : 'normal'}}> 
                        {move === 0 ? 'go to game start' : `move ${move}`} 
                    </button>
                </li>
            )
        })}
    </ul>
  );
};

export default History