import React, { Component } from 'react';
import logo from './img/logo-pokemon.png';
import './App.css';

import { DetailView } from './components/DetailView/index.jsx';
import { SearchBar } from './components/SearchBar/index.jsx';
import { PokemonList } from './components/PokemonList/index.jsx';


// import {  } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="Pokemon logo" />
        </header>
        <main className="col-xs-12 col-lg-10 col-lg-offset-1">
          <DetailView />
          <SearchBar />
          <PokemonList />
        </main>
      </div>
    );
  }
}

export default App;
