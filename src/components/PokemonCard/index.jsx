import React, { Component } from 'react';
import './styles.css';

class PokemonCard extends Component {

    getSourceImg = (id) => {
        return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png";
    }

    getFormattedID = (id) => {
        return id.length < 3 ? this.getFormattedID(0 + id) : id;
    }

    render() { 
        const { pokemon, id} = this.props;

        return ( 
            <div className="pokemon-card text-center col-xs-6 col-sm-4 col-md-3">
                <div className="card-img">
                    <img className="img-responsive" src={this.getSourceImg(id)} alt={pokemon.name}></img>
                </div>
                <div>
                    <p className="card-id">{this.getFormattedID(id)} </p>
                    <h5 className="card-name">{pokemon.name}</h5>
                    <p className="card-type"><span>Type: </span> Poison</p>
                </div>
            </div>
        );
    }
}
 
export default PokemonCard;