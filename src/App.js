import React, { Component } from 'react';
import logo from './img/logo-pokemon.png';
import './App.css';

import { DetailView } from './components/DetailView/index.js';
import { SearchBar } from './components/SearchBar/index.js';
import { PokemonList } from './components/PokemonList/index.js';


// import {  } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="Pokemon logo" />
        </header>
        <main className="col-xs-12 col-md-10 col-md-offset-1">
          <DetailView />
          <SearchBar />
          <PokemonList />
        </main>
      </div>
    );
  }
}

export default App;
