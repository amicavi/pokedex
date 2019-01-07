import React, { Component } from 'react';
import './styles.css';
import pokeball_hunting from '../../assets/pokeball_hunting.png';


class PokemonCard extends Component {

    getSourceImg = (id) => {
        return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png";
    }

    getFormattedID = (id) => {
        return id.length < 3 ? this.getFormattedID(0 + id) : id;
    }

    render() {
        const { pokemon, id, onSelection} = this.props;

        return (
            <button className="pokemon-card text-center col-xs-6 col-sm-4 col-md-3" onClick={() => onSelection(id)}>
                <div className="card-img">
                    {/* <object className="img-responsive" data={this.getSourceImg(id)} type="image/png">
                        <img src="https://appharbor.com/assets/images/stackoverflow-logo.png"  alt={pokemon.name}></img>
                    </object> */}
                    <img className="img-responsive" src={this.getSourceImg(id)} onError={(e)=>{e.target.onerror = null; e.target.src= pokeball_hunting}} alt={pokemon.name}></img>
                </div>
                <div>
                    <p className="card-id">{this.getFormattedID(id)} </p>
                    <h5 className="card-name">{pokemon.name}</h5>
                    <p className="card-type"><span>Type: </span> Poison</p>
                </div>
            </button>
        );
    }
}

export default PokemonCard;