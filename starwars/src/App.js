import React, { Component } from 'react';
import './App.css';
import './components/StarWars.css';
import CharacterList from './components/CharacterList';
import { pics } from './components/CharacterPic';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsPix: pics,
      prev: "",
      next: "",
      picIndexMultiplier: 0
    };
  }


  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results,
          prev: data.previous,
          next: data.next
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  //method to get new page
  getNewPage = event => {
    event.preventDefault();
    //setting photo index multiplier
    let newMult = this.state.picIndexMultiplier;
    if(event.target.name !== "") {
      //get characters for the new page
      this.getCharacters(event.target.name);
      //updating photo index multipler
      newMult = event.target.id === "prev" ? newMult - 10: newMult + 10 ;
    }
    this.setState({
      picIndexMultiplier: newMult
    })

  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="navButton-wrapper">
          <button name={this.state.prev} id="prev" onClick = {this.getNewPage}>Previous</button>
          <button name={this.state.next} id="next" onClick = {this.getNewPage}>Next</button>
        </div>
        <div>
          <CharacterList characters={this.state.starwarsChars} pics={this.state.starwarsPix} picMult={this.state.picIndexMultiplier} />
        </div>
        
      </div>
    );
  }
}

export default App;
