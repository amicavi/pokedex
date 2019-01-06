import React, { Component } from 'react';
import './styles.css';
import constants from '../../utilities/constants.js';
import FetchHelper from '../../utilities/fetchHelper.js';



class SearchBar extends Component {
    state = {
        count : 0,
        pokemons_list : [],
        input_value : ""
    }

    filterPokemonsById = (id) => {
        const filtered_list = this.state.pokemons_list.filter(pokemon => {
            const regex = new RegExp("pokemon/" + id, "i");
            return regex.test(pokemon.url);
        });

        console.log(filtered_list);
    }

    filterPokemonsByName = (name) => {
        const filtered_list = this.state.pokemons_list.filter(pokemon => {
            const regex = new RegExp(name, "i");
            return regex.test(pokemon.name);
        });

        console.log(filtered_list);
    }

    handleChange = (e) => {
        e.persist()
        e.stopPropagation();
        this.setState({
            input_value: e.target.value
        })
    }

    handleKeyDown = (e) => {
        e.persist()
        e.stopPropagation();
        if (/enter/i.test(e.key)) {
            if(!isNaN(parseInt(this.state.input_value))){
                console.log("filterPokemonsById");
                this.filterPokemonsById(this.state.input_value)
            }else{
                console.log("filterPokemonsByName");
                this.filterPokemonsByName(this.state.input_value)
            }
        }
    }

    updatePokemonsList = (resp) => {
        this.setState({
            pokemons_list: resp.results,
            count : resp.count
        })
    }

    componentDidMount(){
        FetchHelper.get.fullPokemonList(constants.api_co, this.updatePokemonsList)
    }

    render() {
        return (
            <section className="search_bar col-sm-8 col-xs-12">
                <div className="inner-addon">
                    <i className="glyphicon glyphicon-search search-icon"></i>
                    <input type="text" placeholder="Type name or ID and press enter key" className="form-control" onKeyDown={this.handleKeyDown} onInput={this.handleChange}/>
                </div>
            </section>
        );
    }
}

export default SearchBar;