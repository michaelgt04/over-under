import React from 'react';

const Form = props => {
  return(
      <form>
        <div className="row">
          <div className="columns small-3">
            <input type="text" name="title" placeholder="Enter title here..." onChange={props.handleTitleChange}/>
          </div>
          <div className="columns small-3">
            <input type="text" name="description" placeholder="Enter descriptions here..." onChange={props.handleDescriptionChange}/>
          </div>
          <div className="columns small-3">
            <input type="text" name="set-number" placeholder="Set number here..." onChange={props.handleNumberChange}/>
          </div>
          <div className="columns small-3">
            <input type="text" name="voter" placeholder="Set voter here..." onChange={props.handleVoterChange}/>
          </div>
        </div>
        <div className="row">
          <div className="columns small-3 small-offset-3">
            <select name="category" className="browser-default" onChange={props.handleVoteChange}>
              <option value="Over">Over</option>
              <option value="Under">Under</option>
            </select>
          </div>
          <div className="columns small-3">
            <input className="button" type="submit" value="Submit" name="Submit" onClick={props.handleSubmit}/>
          </div>
        </div>
      </form>
  )
}

export default Form;
