import React, { Component } from 'react';
import logo from './img/logo-pokemon.png';
import './App.css';
import constants from './utilities/constants.js';
import FetchHelper from './utilities/fetchHelper.js';

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

  paginationClickHandler = (page_offset) => {
    this.getPokemonList(page_offset)
  }

  updateProfile = (profile) => {
    this.setState({
      profile: profile,
      isEmptyState : false
    })
  }

  parseProfileResponse = (info, id) => {
    // const profile = Parser.pokemon_profile(response);
    // const profile = { "name": "pikachu", "id": "025", "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", "stats" :[{ "name": "hp", "base_stat": 35 },{ "name": "attack", "base_stat": 55 },{ "name": "defense", "base_stat": 40 },{ "name": "speed", "base_stat": 90 },{ "name": "Sp atk", "base_stat": 50 },{ "name": "Sp def", "base_stat": 50 }], "profile" :[{ "name" :"capture_rate", "value" : 190 },{ "name" :"egg_groups", "value" : "fairy, ground" },{ "name" :"abilities", "value" : "lightning-rod, static" },{ "name" :"gender_rate", "value" : 4 },{ "name" :"hatch_counter", "value" : 10 },{ "name" :"EVs", "value" : "0 Sp Att" }] }
    // this.updateProfile(profile);
  }

  

  pokemonSelectionHandle = (id) => {
    console.log(id)
    const parseresponse = () => {

    }

    const addSpecieInfo = (info) => {
      FetchHelper.get.pokemonSpecie(constants.api_url, id, parseresponse);
    }
    FetchHelper.get.pokemonInfo(constants.api_url, id, addSpecieInfo);

    this.setState({isEmptyState : false, profile : { "name": "pikachu", "id": "025", "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", "stats" :[{ "name": "hp", "base_stat": 35 },{ "name": "attack", "base_stat": 55 },{ "name": "defense", "base_stat": 40 },{ "name": "speed", "base_stat": 90 },{ "name": "Sp atk", "base_stat": 50 },{ "name": "Sp def", "base_stat": 50 }], "profile" :[{ "name" :"capture_rate", "value" : 190 },{ "name" :"egg_groups", "value" : "fairy, ground" },{ "name" :"abilities", "value" : "lightning-rod, static" },{ "name" :"gender_rate", "value" : 4 },{ "name" :"hatch_counter", "value" : 10 },{ "name" :"EVs", "value" : "0 Sp Att" }] }})
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

  addPokemonType = (pokemons, offset) => {
    const parsed_list = [];
    const pushPokemonItem = (info, pokemon) => {
      pokemon.type = info.types[0].type.name;
      parsed_list.push(pokemon);
    }
    
    pokemons.results.forEach(function(pokemon){ 
      FetchHelper.get.pokemonInfo(constants.api_co, pokemon.namem, pushPokemonItem, pokemon)
    })

    pokemons.results = parsed_list
    this.updatePokemonList(pokemons, offset);
  }

  getPokemonList = (offset_param) => {
    const url = constants.api_url;
    const limit = constants.pagination.limit;
    const offset = offset_param ? offset_param : 0
    FetchHelper.get.pokemonList(offset, url, limit, this.addPokemonType)
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
