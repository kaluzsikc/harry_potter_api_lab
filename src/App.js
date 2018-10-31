import React, { Component } from 'react';
import './App.css';
import HpContainer from './containers/hp_container';

class App extends Component {
  render() {
    const characterList = [
      { name: "All Characters", url: "http://hp-api.herokuapp.com/api/characters" },
      { name: "Students", url: "http://hp-api.herokuapp.com/api/characters/students" },
      { name: "Staff", url: "http://hp-api.herokuapp.com/api/characters/staff" },
      { name: "Gryffindor", url: "http://hp-api.herokuapp.com/api/characters/house/gryffindor" },
      { name: "Hufflepuff", url: "http://hp-api.herokuapp.com/api/characters/house/hufflepuff" },
      { name: "Slytherin", url: "http://hp-api.herokuapp.com/api/characters/house/slytherin" },
      { name: "Ravenclaw", url: "http://hp-api.herokuapp.com/api/characters/house/ravenclaw" }
    ]

    return (
      <HpContainer characterList={characterList} />
    );
  }
}

export default App;