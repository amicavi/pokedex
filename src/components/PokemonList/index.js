import React, { Component } from 'react';
import './styles.css';

export class PokemonList extends Component {
    state = { 
        // pokemons : [{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/51\/","name":"dugtrio"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/52\/","name":"meowth"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/53\/","name":"persian"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/54\/","name":"psyduck"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/55\/","name":"golduck"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/56\/","name":"mankey"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/57\/","name":"primeape"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/58\/","name":"growlithe"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/59\/","name":"arcanine"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/60\/","name":"poliwag"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/61\/","name":"poliwhirl"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/62\/","name":"poliwrath"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/63\/","name":"abra"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/64\/","name":"kadabra"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/65\/","name":"alakazam"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/66\/","name":"machop"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/67\/","name":"machoke"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/68\/","name":"machamp"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/69\/","name":"bellsprout"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/70\/","name":"weepinbell"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/71\/","name":"victreebel"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/72\/","name":"tentacool"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/73\/","name":"tentacruel"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/74\/","name":"geodude"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/75\/","name":"graveler"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/76\/","name":"golem"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/77\/","name":"ponyta"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/78\/","name":"rapidash"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/79\/","name":"slowpoke"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/80\/","name":"slowbro"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/81\/","name":"magnemite"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/82\/","name":"magneton"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/83\/","name":"farfetchd"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/84\/","name":"doduo"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/85\/","name":"dodrio"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/86\/","name":"seel"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/87\/","name":"dewgong"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/88\/","name":"grimer"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/89\/","name":"muk"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/90\/","name":"shellder"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/91\/","name":"cloyster"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/92\/","name":"gastly"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/93\/","name":"haunter"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/94\/","name":"gengar"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/95\/","name":"onix"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/96\/","name":"drowzee"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/97\/","name":"hypno"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/98\/","name":"krabby"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/99\/","name":"kingler"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/100\/","name":"voltorb"}]
        pokemons : []
    }
    render() { 
        return ( 
            <section className="col-sm-8 col-xs-12">
                <div className="pokemons_list thumbnail col-xs-12">
                    {this.state.pokemons.length === 0 && "There isn't any pokemon match"}
                    {this.state.pokemons.map(pokemon => 
                        <div className="pokemon-card text-center col-xs-6 col-sm-4 col-md-3">
                            <div className="card-img">
                                <img className="img-responsive" src={this.getSourceImg(pokemon.url)} alt={pokemon.name}></img>
                            </div>
                            <div>
                                <p className="card-id">{this.getPokemonID(pokemon.url)} </p>
                                <h5 className="card-name">{pokemon.name}</h5>
                                <p className="card-type"><span>Type: </span> Poison</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    }

    getSourceImg(url) {
        const matched_position = url.match(/pokemon[\W|\D|\S](?:...)/ig)[0];
        const id = matched_position.match(/\d+/)[0];
        const source = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png";
        return source;
    }

    getFormattedID(id) {
        return id.length < 3 ? this.getFormattedID(0 + id) : id;
    }

    getPokemonID(url) {
        const matched_position = url.match(/pokemon[\W|\D|\S](?:...)/ig)[0];
        const id = matched_position.match(/\d+/)[0];
        const formated_id = this.getFormattedID(id);

        return formated_id;
    }

    // getPokemonType(url) {
    //     const matched_position = url.match(/pokemon[\W|\D|\S](?:...)/ig)[0];
    //     const id = matched_position.match(/\d+/)[0];

    // }
}
 
// export default PokemonList;