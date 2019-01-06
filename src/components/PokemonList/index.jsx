import React, { Component } from 'react';
import constants from '../../utilities/constants.js';
import FetchHelper from '../../utilities/fetchHelper.js';
import PokemonCard from '../PokemonCard/index.jsx';
import Pagination from '../Pagination/index.jsx';

class PokemonList extends Component {
    state = {
        pokemon_list : [],
        pages : {
            current_page:0,
            previous:"",
            next:"",
            count: 0
        }
    }

    paginationClickHandler = (page_offset) => {
        // if complete list perfome other action
        this.getPokemonList(page_offset, this.updatePokemonList)
    }

    getPokemonID = (url) => {
        const matched_position = url.match(/pokemon.{1,}/ig)[0];
        const id = matched_position.match(/\d+/)[0];
        return id;
    }

    updatePokemonList = (pokemon_list, offset) => {
        this.setState({
            pokemon_list: pokemon_list.results,
            pages : {
            previous:pokemon_list.previous,
            current_page: offset ? (offset/50) : 0,
            next:pokemon_list.next,
            count: pokemon_list.count
            }
        })
    }

    getPokemonList = (offset, cb) => {
        const addPokemonType = (pokemons, offset) => {
            const parsed_list = [];
            const pushPokemonItem = (info, pokemon) => {
                pokemon.name = pokemon.name.replace(/-/g, " ");
                pokemon.type = info.types[0].type.name.replace(/-/g, " ");;
                parsed_list.push(pokemon);
            }

            pokemons.results.forEach(function(pokemon){
                FetchHelper.get.pokemonInfo(constants.api_co, pokemon.name, pushPokemonItem, pokemon)
            })

            pokemons.results = parsed_list
            cb(pokemons, offset);
        }

        const getList = (offset_param) => {
            const url = constants.api_url;
            const limit = constants.pagination.limit;
            const offset = offset_param ? offset_param : 0
            FetchHelper.get.pokemonList(offset, url, limit, addPokemonType)
        }

        getList(offset)
    }

    componentDidMount = () => {
        this.getPokemonList(null, this.updatePokemonList);
    }

    render() {
        const {selection_handler} = this.props;
        const isEmptyList = this.state.pokemon_list.length === 0;

        return (
            <section className="col-sm-8 col-xs-12">
                <div className="pokemons_list thumbnail col-xs-12">
                    {isEmptyList? (
                        <div className="col-xs-12">
                            <h4>There isn't pokemons to show</h4>
                        </div>
                    ) : (
                        <React.Fragment>
                        {this.state.pokemon_list.map(pokemon =>
                            <PokemonCard
                                key = {pokemon.name}
                                pokemon = {pokemon}
                                id = {this.getPokemonID(pokemon.url)}
                                onSelection = {selection_handler}
                            />
                        )}
                        </React.Fragment>
                    )}
                </div>
                {!isEmptyList &&
                    <Pagination
                        previous={this.state.pages.previous}
                        next={this.state.pages.next}
                        current_page={this.state.pages.current_page}
                        count={this.state.pages.count}
                        limit={constants.pagination.limit}
                        onPaginationClick = {this.paginationClickHandler}
                    />
                }
            </section>
        );
    }
}

export default PokemonList;