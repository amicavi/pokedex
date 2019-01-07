import React, { Component } from 'react';
import './styles.css';
import pokeball_hunting from '../../assets/pokeball_hunting.png';


class PokemonCard extends Component {

    getFormattedID = (id) => {
        return id.length < 3 ? this.getFormattedID(0 + id) : id;
    }

    render() {
        const { pokemon, id, onSelection} = this.props;
        return (
            <button className="pokemon-card text-center col-xs-6 col-sm-4 col-md-3" onClick={() => onSelection(id)}>
                <div className="card-img">
                    <img className="img-responsive" src={pokemon.image? pokemon.image : pokeball_hunting} onError={(e)=>{e.target.onerror = null; e.target.src = pokeball_hunting}} alt={pokemon.name}></img>
                </div>
                <div>
                    <p className="card-id">{this.getFormattedID(id)} </p>
                    <h5 className="card-name">{pokemon.name}</h5>
                    <p className="card-type"><span>Type: </span> {pokemon.type}</p>
                </div>
            </button>
        );
    }
}

export default PokemonCard;