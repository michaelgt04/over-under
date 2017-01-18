import React from 'react'

const Bet = props => {
  return(
    <div className="row">
      <h2 className="columns small-3">{props.title}</h2>
      <div className="columns small-3">
        <p>{props.description}</p>
        <p>{props.number}</p>
        <p>{props.voter}</p>
      </div>
      <div className="columns small-3">
        <p>Vote: {props.vote}</p>
        <p>Count: {props.count}</p>
      </div>
      <div className="columns small-3">
        <button type="button" onClick={props.handleCountAdd}>Add Vote</button>
        <button type="button" onClick={props.handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Bet;
