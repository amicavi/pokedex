import React, { Component } from 'react';
import './styles.css';

export class PokemonList extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="pokemons_list" class="col-sm-8 col-xs-12">
                <div class="thumbnail col-xs-12">
                    <div class="pokemon-card text-center col-xs-6 col-md-3">
                        <img class="card-img img-responsive" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png" alt="Pokemon look"></img>
                        <div>
                            <p class="card-id">10075</p>
                            <h5 class="card-name">Diancie Mega</h5>
                            <p class="card-type"><span>Type: </span> Poison</p>
                        </div>
                    </div>
                    <div class="pokemon-card text-center col-xs-6 col-md-3">
                        <img class="card-img img-responsive" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokemon look"></img>
                        <div>
                            <p class="card-id">001</p>
                            <h5 class="card-name">Bulbasaur</h5>
                            <p class="card-type"><span>Type: </span> Poison</p>
                        </div>
                    </div>
                    <div class="pokemon-card text-center col-xs-6 col-md-3">
                        <img class="card-img img-responsive" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" alt="Pokemon look"></img>
                        <div>
                            <p class="card-id">010</p>
                            <h5 class="card-name">Caterpie</h5>
                            <p class="card-type"><span>Type: </span> Poison</p>
                        </div>
                    </div>
                    <div class="pokemon-card text-center col-xs-6 col-md-3">
                        <img class="card-img img-responsive" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pokemon look"></img>
                        <div>
                            <p class="card-id">025</p>
                            <h5 class="card-name">Pikachu</h5>
                            <p class="card-type"><span>Type: </span> Poison</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
// export default PokemonList;