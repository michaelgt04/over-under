import React from 'react';

const Form = props => {
  return(
    <div className="row search">
        <form>
          <div className="input-field col s3">
            <input type="text" name="title" placeholder="Enter title here..." onChange={props.handleTitleChange}/>
          </div>
          <div className="input-field col s3">
            <input type="text" name="description" placeholder="Enter descriptions here..." onChange={props.handleDescriptionChange}/>
          </div>
          <div className="input-field col s3">
            <input type="text" name="set-number" placeholder="Set number here..." onChange={props.handleNumberChange}/>
          </div>
          <div className="input-field col s3">
            <input type="text" name="voter" placeholder="Set voter here..." onChange={props.handleVoterChange}/>
          </div>
          <div className="input-field col s3">
            <select name="category" className="browser-default" onChange={props.handleVoteChange}>
              <option value="Over">Over</option>
              <option value="Under">Under</option>
            </select>
          </div>
          <div className="row">
            <div className="col s2 offset-s5 center-align">
              <input className="btn" type="submit" value="Submit" name="Submit" onClick={props.handleSubmit}/>
            </div>
          </div>
        </form>
    </div>
  )
}

export default Form;
