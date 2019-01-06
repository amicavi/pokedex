import React, { Component } from 'react';
import logo from './img/logo-pokemon.png';
import './App.css';
import constants from './utilities/constants.js';
import Handlers from './utilities/handlers.js';

import { SearchBar } from './components/SearchBar/index.jsx';
import DetailView from './components/DetailView/index.jsx';
import PokemonList from './components/PokemonList/index.jsx';
import Pagination from './components/Pagination/index.jsx';

class App extends Component {
  state = { 
    profile : {},
    isEmptyState : true,
    pokemons : [],
    pages : {
      current_page:0,
      previous:"",
      next:"",
      count: 0
    }
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

  updatePokemonList = (pokemon_list, offset) => {
    this.setState({
      pokemons: pokemon_list.results,
      pages : {
        previous:pokemon_list.previous,
        current_page: offset ? (offset/50) : 0,
        next:pokemon_list.next,
        count: pokemon_list.count
      }
    })
  }

  paginationClickHandler = (page_offset) => {
    Handlers.getPokemonList(page_offset, this.updatePokemonList)
  }

  componentDidMount = () => {
    Handlers.getPokemonList(null, this.updatePokemonList);
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
            pokemon_list={this.state.pokemons}
            selection_handler = {this.pokemonSelectionHandle}
          />
          <Pagination
            previous={this.state.pages.previous}
            next={this.state.pages.next}
            current_page={this.state.pages.current_page}
            count={this.state.pages.count}
            limit={constants.pagination.limit}
            onPaginationClick = {this.paginationClickHandler}
          />
        </main>
      </div>
    );
  }
}

export default App;
