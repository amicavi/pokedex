import React, { Component } from 'react';
import logo from './img/logo-pokemon.png';
import './App.css';

import SearchBar from './components/SearchBar/index.jsx';
import DetailView from './components/DetailView/index.jsx';
import PokemonList from './components/PokemonList/index.jsx';

class App extends Component {
    state = {
        selected_pokemon_id : "",
        filtered_list : [],
        filtered_input: ""
    }

    pokemonSelectionHandle = (id) => {
        this.setState({
            selected_pokemon_id: id
        })
    }

    onNewFilteredList = (newList, filterInput) => {
        this.setState({
            filtered_list: newList,
            filtered_input: filterInput
        })
    }

    render() {
        return (
            <div className="App">
                <header>
                    <img src={logo} className="App-logo" alt="Pokemon logo" />
                </header>
                <main className="col-xs-12 col-lg-10 col-lg-offset-1">
                    <DetailView
                        id={this.state.selected_pokemon_id}
                    />
                    <SearchBar
                        onNewList={this.onNewFilteredList}
                    />
                    <PokemonList
                        selection_handler = {this.pokemonSelectionHandle}
                        filtered_list = {this.state.filtered_list}
                        filtered_input = {this.state.filtered_input}
                    />
                </main>
            </div>
        );
    }
}

export default App;
