import React, { Component } from 'react';
import Bet from './Bet'
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bets: [],
      title: "",
      description: "",
      number: "",
      voter: "",
      vote: "Over"
    };
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleVoterChange = this.handleVoterChange.bind(this)
    this.handleVoteChange = this.handleVoteChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCountAdd = this.handleCountAdd.bind(this)
    this.handleDownVote = this.handleDownVote.bind(this)
  }

  handleTitleChange(event) {
    let newTitle = event.target.value;
    this.setState({ title: newTitle })
  }

  handleNumberChange(event) {
    let newNumber = event.target.value;
    this.setState({ number: newNumber })
  }

  handleDescriptionChange(event){
    let newDescription = event.target.value;
    this.setState({ description: newDescription })
  }

  handleVoterChange(event){
    let newVoter = event.target.value;
    this.setState({ voter: newVoter })
  }

  handleVoteChange(event){
    let newVote = event.target.value;
    this.setState = ({ vote: newVote })
  }

  handleSubmit(event){
    event.preventDefault()
    let fetchBody = { title: this.state.title, description: this.state.description, set_number: this.state.number, voter: this.state.voter, vote: this.state.vote }
    let newRestaurants = []
    fetch('/api/v1/bets',
      { method: "POST",
      body: JSON.stringify(fetchBody) })
      .then(function(response) {
        let newBets = response.json()
        return newBets
      }).then((response) => this.setState({
        bets: response,
      }))
  }

  handleDelete(betId){
    let fetchBody = { id: betId }
    let newBets = []
    fetch(`/api/v1/bets/${betId}`,
    { method: "DELETE",
    body: JSON.stringify(fetchBody)
  }).then(function(response) {
      newBets = response.json()
      return newBets
  }).then((response) => this.setState({bets: response}))
  }

  handleCountAdd(betId){
    let fetchBody = { id: betId }
    let newBets = []
    fetch(`/api/v1/bets/${betId}`,
    { method: "PATCH",
    body: JSON.stringify(fetchBody)
  }).then(function(response) {
      newBets = response.json()
      return newBets
  }).then((response) => this.setState({bets: response}))
  }

  handleDownVote(restaurantId){
    let fetchBody = { id: restaurantId, type: "down_vote" }
    let newRestaurants = []
    fetch(`/api/v1/restaurants/${restaurantId}`,
    { method: "PATCH",
    body: JSON.stringify(fetchBody)
  }).then(function(response) {
      newRestaurants = response.json()
      return newRestaurants
  }).then((response) => this.setState({restaurants: response}))
  }

  componentDidMount() {
    fetch('/api/v1/bets')
      .then(response => {
        let bets = response.json()
        return bets
      }).then(response => {
        this.setState({
          bets: response
        })
      })
  }

  render() {
    let bets = this.state.bets.map(bet => {
      let handleDelete = () => {
        this.handleDelete(bet.id)
      }
      let handleCountAdd = () => {
        this.handleCountAdd(bet.id)
      }
      return(
        <Bet
          key={bet.id}
          id={bet.id}
          title={bet.title}
          description={bet.description}
          number={bet.set_number}
          voter={bet.voter}
          vote={bet.vote}
          count={bet.count}
          handleDelete={handleDelete}
          handleCountAdd={handleCountAdd}
         />
      )
    })
    return(
      <div>
        <h1>Over-Under</h1>
        <h2>New Bet</h2>
        <Form
          handleTitleChange={this.handleTitleChange}
          handleDescriptionChange={this.handleDescriptionChange}
          handleNumberChange={this.handleNumberChange}
          handleVoterChange={this.handleVoterChange}
          handleVoteChange={this.handleVoteChange}
          handleSubmit={this.handleSubmit}
        />
        {bets}
      </div>
      )
    }
}

export default App;
