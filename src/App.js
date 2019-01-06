import React, { Component } from 'react';
import logo from './img/logo-pokemon.png';
import './App.css';
import Handlers from './utilities/handlers.js';

import { SearchBar } from './components/SearchBar/index.jsx';
import DetailView from './components/DetailView/index.jsx';
import PokemonList from './components/PokemonList/index.jsx';

class App extends Component {
  state = {
    profile : {},
    isEmptyState : true,
  }

  updateProfile = (profile) => {
    this.setState({
      profile: profile,
      isEmptyState : false
    })
  }

  pokemonSelectionHandle = (id) => {
    console.log(id)
    Handlers.getPokemonDetails(id, this.updateProfile)
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="Pokemon logo" />
        </header>
        <main className="col-xs-12 col-lg-10 col-lg-offset-1">
          <DetailView profile={this.state.profile} isEmptyState={this.state.isEmptyState}/>
          <SearchBar />
          <PokemonList
            selection_handler = {this.pokemonSelectionHandle}
          />
        </main>
      </div>
    );
  }
}

export default App;
