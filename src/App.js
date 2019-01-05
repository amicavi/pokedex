import React, { Component } from 'react';
import logo from './img/logo-pokemon.png';
import './App.css';
import constants from './constants/index.js';

import DetailView from './components/DetailView/index.jsx';
import { SearchBar } from './components/SearchBar/index.jsx';
import PokemonCard from './components/PokemonCard/index.jsx';
import Pagination from './components/Pagination/index.jsx';

class App extends Component {
  state = { 
    profile : {},
    isEmptyState : true,
    pokemons : [],
    pages : {
      current_offset:0,
      previous:"",
      next:"",
      count: 0
    }
  }

  getPokemonID = (url) => {
    const matched_position = url.match(/pokemon.{1,}/ig)[0];
    const id = matched_position.match(/\d+/)[0];
    return id;
  }

  pokemonSelectionHandle = (id) => {
    console.log(id)
    this.setState({isEmptyState : false, profile : { "name": "pikachu", "id": "025", "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", "stats" :[{ "name": "hp", "base_stat": 35 },{ "name": "attack", "base_stat": 55 },{ "name": "defense", "base_stat": 40 },{ "name": "speed", "base_stat": 90 },{ "name": "Sp atk", "base_stat": 50 },{ "name": "Sp def", "base_stat": 50 }], "profile" :[{ "name" :"capture_rate", "value" : 190 },{ "name" :"egg_groups", "value" : "fairy, ground" },{ "name" :"abilities", "value" : "lightning-rod, static" },{ "name" :"gender_rate", "value" : 4 },{ "name" :"hatch_counter", "value" : 10 },{ "name" :"EVs", "value" : "0 Sp Att" }] }})
  }

  renderPokemons = () => {
    if (this.state.pokemons.length === 0) return 

    return (
        <React.Fragment>
        {this.state.pokemons.map(pokemon => 
            <PokemonCard 
              key = {pokemon.name}
              pokemon = {pokemon} 
              id = {this.getPokemonID(pokemon.url)}
              onSelection = {this.pokemonSelectionHandle}
            />
        )}
        </React.Fragment>
    )
  }

  getPokemonList = (offset) => {
    const url = constants.pagination.url + "?limit=" + constants.pagination.limit + "&offset=" + (offset ? offset : 0);
    fetch(url)
      .then( res => res.json() )
      .then( json => {
        this.setState({
          pokemons: json.results,
          pages : {
            previous:json.previous,
            current_offset:offset,
            next:json.next,
            count: json.count
          }
        })
      });
  }

  componentDidMount = () => {
    this.getPokemonList();
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
          <section className="col-sm-8 col-xs-12">
            <div className="pokemons_list thumbnail col-xs-12">
              {this.renderPokemons()}
            </div>
          </section>
          <Pagination 
            previous={this.state.pages.previous}
            next={this.state.pages.next}
            current_offset={this.state.pages.current_offset}
            count={this.state.pages.count}
            url={constants.pagination.url}
            limit={constants.pagination.limit}
          />
        </main>
      </div>
    );
  }
}

export default App;
