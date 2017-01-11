import React, { Component } from 'react';
import Restaurant from './Restaurant'
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
      vote: "Over",
    };
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpVote = this.handleUpVote.bind(this)
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
    let fetchBody = { title: this.state.title, description: this.state.description, voter: this.state.voter, vote: this.state.vote }
    let newRestaurants = []
    fetch('/api/v1/restaurants',
      { method: "POST",
      body: JSON.stringify(fetchBody) })
      .then(function(response) {
        newRestaurants = response.json()
        return newRestaurants
      }).then((response) => this.setState({
        restaurants: response,
      }))
  }

  handleDelete(restaurantId){
    let fetchBody = { id: restaurantId }
    let newRestaurants = []
    fetch(`/api/v1/restaurants/${restaurantId}`,
    { method: "DELETE",
    body: JSON.stringify(fetchBody)
  }).then(function(response) {
      newRestaurants = response.json()
      return newRestaurants
  }).then((response) => this.setState({restaurants: response}))
  }

  handleUpVote(restaurantId){
    let fetchBody = { id: restaurantId, type: "up_vote" }
    let newRestaurants = []
    fetch(`/api/v1/restaurants/${restaurantId}`,
    { method: "PATCH",
    body: JSON.stringify(fetchBody)
  }).then(function(response) {
      newRestaurants = response.json()
      return newRestaurants
  }).then((response) => this.setState({restaurants: response}))
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
        this.setState({
          bets: response
        })
      })
  }

  render() {
    // let restaurants = this.state.bets.map(restaurant => {
    //   let handleDelete = () => {
    //     this.handleDelete(restaurant.id)
    //   }
    //   let handleUpVote = () => {
    //     this.handleUpVote(restaurant.id)
    //   }
    //   let handleDownVote = () => {
    //     this.handleDownVote(restaurant.id)
    //   }
    //   return(
    //     <Restaurant
    //       key={restaurant.id}
    //       id={restaurant.id}
    //       name={restaurant.name}
    //       category={restaurant.category}
    //       description={restaurant.description}
    //       upVotes={restaurant.up_votes}
    //       downVotes={restaurant.down_votes}
    //       handleDelete={handleDelete}
    //       handleUpVote={handleUpVote}
    //       handleDownVote={handleDownVote}
    //      />
    //   )
    // })
    return(
      <div>
        <h1 className="columns small-4 small-centered">Fast-Food Fiend</h1>
        <h2 className="columns small-4 small-centered">New Restaurant</h2>
        <Form
          handleNameChange={this.handleNameChange}
          handleCategoryChange={this.handleCategoryChange}
          handleDescriptionChange={this.handleDescriptionChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
      )
    }
}

export default App;
