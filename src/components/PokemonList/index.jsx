import React, { Component } from 'react';
import constants from '../../utilities/constants.js';
import FetchHelper from '../../utilities/fetchHelper.js';
import PokemonCard from '../PokemonCard/index.jsx';
import Pagination from '../Pagination/index.jsx';

class PokemonList extends Component {
    state = {
        pokemon_list : [],
        filtered_pages : [],
        pages : {
            current_page: 0,
            previous: null,
            next: null,
            count: 0
        }
    }

    getPageInfo = (offset) => {
        const page_info = {
            previous : offset > 0 ? (offset - constants.pagination.limit).toString() : null,
            next : offset <= this.state.count ? (offset + constants.pagination.limit).toString() : null,
            count : this.state.pages.count
        }
        return page_info;
    }

    getPagelist = (page_offset) => {
        const page_index = (page_offset / constants.pagination.limit);
        return this.state.filtered_pages[page_index];
    }

    paginationClickHandler = (page_offset) => {
        if (this.state.filtered_pages.length) {
            const pages_info = this.getPageInfo(page_offset)
            const pokemon_list = {
                results: this.getPagelist(page_offset),
                previous: pages_info.previous,
                next: pages_info.next,
                count: pages_info.count
            }
            this.updatePokemonList(pokemon_list, page_offset)
        } else {
            this.getPokemonList(page_offset)
        }
    }

    getPokemonID = (url) => {
        const matched_position = url.match(/pokemon.{1,}/ig)[0];
        const id = matched_position.match(/\d+/)[0];
        return id;
    }

    updatePokemonList = (pokemon_list, offset, filtered_pages) => {
        this.setState({
            pokemon_list: pokemon_list.results,
            filtered_pages: filtered_pages ? filtered_pages : this.state.filtered_pages,
            pages : {
                previous:pokemon_list.previous,
                current_page: offset ? (offset/constants.pagination.limit): 0,
                next:pokemon_list.next,
                count: pokemon_list.count
            }
        })
    }

    listIntoChuncks = (list) => {
        let chunked_list = [];
        let list_to_change = list;
        while (list_to_change.length > 0) {
            chunked_list.push(list_to_change.splice(0, constants.pagination.limit));
        }
        return chunked_list;
    }

    prepareToUpdate = (pokemon_list, offset) => {
        if (this.props.filtered_list.length > constants.pagination.limit) {
            const chunked_list = this.listIntoChuncks(this.props.filtered_list)
            this.updatePokemonList(pokemon_list, offset, chunked_list);
        } else {
            this.updatePokemonList(pokemon_list, offset);
        }
    }

    addTypeAndImage = (pokemons, offset) => {
        const parsed_list = [];
        const pushPokemonItem = (info, pokemon) => {
            pokemon.name = pokemon.name.replace(/-/g, " ");
            pokemon.type = info.types[0].type.name.replace(/-/g, " ");
            // pokemon.image = info.sprites.front_default CORS not allow get image
            parsed_list.push(pokemon);
        }

        pokemons.results.forEach(function(pokemon){
            FetchHelper.get.pokemonInfo(constants.api_co, pokemon.name, pushPokemonItem, pokemon)
        })

        pokemons.results = parsed_list
        this.prepareToUpdate(pokemons, offset)
    }

    getPokemonList = (offset) => {
        const getList = (offset_param) => {
            const url = constants.api_url;
            const limit = constants.pagination.limit;
            const offset = offset_param ? offset_param : 0
            FetchHelper.get.pokemonList(offset, url, limit, this.addTypeAndImage)
        }

        getList(offset)
    }

    componentDidUpdate = (oldProps, oldState) => {
        if (oldProps.filtered_input !== this.props.filtered_input) {
            if (this.props.filtered_list.length > 0) {
                const parsed_list = {
                    results: this.props.filtered_list.slice(0,50),
                    current_page:0,
                    previous:null,
                    next: this.props.filtered_list.length > constants.pagination.limit? constants.pagination.limit : null,
                    count : this.props.filtered_list.length
                }

                this.addTypeAndImage(parsed_list);
            }else{
                this.setState({
                    pokemon_list: [],
                })
            }
        }
    }

    componentDidMount = () => {
        this.getPokemonList();
    }

    render() {
        const {selection_handler} = this.props;
        const isEmptyList = this.state.pokemon_list.length === 0;

        return (
            <section className="col-sm-8 col-xs-12">
                <div className="pokemons_list thumbnail col-xs-12">
                    {isEmptyList? (
                        <div className="col-xs-12">
                            <h4>There aren't pokemons to show</h4>
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