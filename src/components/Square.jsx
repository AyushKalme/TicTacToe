import React from 'react'

const Square = ({value, onClick , iswinningSquare }) => {
  return (<button className={`square ${iswinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-orange'}  `} onClick={onClick}> {value} </button>)};

  

export default Square;