import React from 'react'

const Bet = props => {
  return(
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.number}</p>
      <p>{props.voter}</p>
      <p>{props.vote}</p>
      <p>Count: {props.count}</p>
      <button type="button" onClick={props.handleCountAdd}>Add Vote</button>
      <button type="button" onClick={props.handleDelete}>Delete</button>
    </div>
  )
}

export default Bet;
