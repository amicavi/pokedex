import React, { Component } from 'react';
import PokemonCard from '../PokemonCard/index.jsx';

class PokemonList extends Component {
    
    getPokemonID = (url) => {
        const matched_position = url.match(/pokemon.{1,}/ig)[0];
        const id = matched_position.match(/\d+/)[0];
        return id;
    }

    render() { 
        const {pokemon_list, selection_handler} = this.props;
        const isEmptyList = pokemon_list.length === 0;

        return ( 
            <section className="col-sm-8 col-xs-12">
                <div className="pokemons_list thumbnail col-xs-12">
                    {/* {this.renderPokemons()} */}
                    {isEmptyList? (
                        <div className="col-xs-12">
                            <h4>There isn't pokemons to show</h4>
                        </div>
                    ) : (
                        <React.Fragment>
                        {pokemon_list.map(pokemon => 
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
            </section>
        );
    }
}
 
export default PokemonList;