
import './App.scss';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    // set some initial/default state values
    this.state = {
      username: '',
      avatar_url: '',
      followers:"",
      following: "",
      public_repos: ""
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/joelorenzo')
      .then(result => {
        console.log(result.data)
        this.setState({
          username: result.data.name,
          avatar_url: result.data.avatar_url,
          followers: result.data.followers,
          following: result.data.following,
          public_repos: result.data.public_repos
        })
      })
      .catch(error => {
        console.log('error:', error)
      })
  }


  render() {
    return (
    <div className="App">
        <div class="container">
          <div class="card">
             <div class="card__image-container">
               <img class="card__image" src={`${this.state.avatar_url}`} alt="a"/>
            </div>



             <div class="card__content">
               <h1 class="card__title">{this.state.username} </h1>
             <p>following: {this.state.following}</p>
              <p>follwers: {this.state.followers}</p>
               <p>repos: {this.state.public_repos}</p>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default App;
