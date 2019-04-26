import React, { Component } from 'react';
import './App.css';
import DogList from "./components/DogList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs:[]
    };
  }


  componentDidMount() {
    this.getDogs('https://dog.ceo/api/breed/frise/images/random/10');
  }

  getDogs = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          dogs: data.message,
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  //method to get new page
  getNewPage = event => {
    event.preventDefault();
    
    if(event.target.name !== "") {
      //get characters for the new page
      this.getCharacters(event.target.name);
     
    }
    

  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Fetch Dogs</h1>
       
        <div className="dog-photos-wrapper">
          <DogList list={this.state.dogs} />
        </div>
        
      </div>
    );
  }
}

export default App;
