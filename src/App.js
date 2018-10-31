import React, { Component } from 'react';
import './App.css';
import HpContainer from './containers/hp_container';

class App extends Component {
  render() {
    const characterList = [
      { name: "All", url: "http://hp-api.herokuapp.com/api/characters" },
      { name: "Students", url: "http://hp-api.herokuapp.com/api/characters/students" },
      { name: "Staff", url: "http://hp-api.herokuapp.com/api/characters/staff" },
      { name: "House", url: "http://hp-api.herokuapp.com/api/characters/house/:house" }
    ]

    return (
      <HpContainer characterList={characterList} />
    );
  }
}

export default App;