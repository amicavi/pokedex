import React, { Component } from 'react';
import './styles.css';

export class PokemonList extends Component {
    state = { 
        pokemons : [{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/1\/","name":"bulbasaur"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/2\/","name":"ivysaur"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/3\/","name":"venusaur"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/4\/","name":"charmander"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/5\/","name":"charmeleon"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/6\/","name":"charizard"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/7\/","name":"squirtle"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/8\/","name":"wartortle"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/9\/","name":"blastoise"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/10\/","name":"caterpie"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/11\/","name":"metapod"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/12\/","name":"butterfree"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/13\/","name":"weedle"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/14\/","name":"kakuna"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/15\/","name":"beedrill"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/16\/","name":"pidgey"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/17\/","name":"pidgeotto"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/18\/","name":"pidgeot"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/19\/","name":"rattata"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/20\/","name":"raticate"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/21\/","name":"spearow"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/22\/","name":"fearow"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/23\/","name":"ekans"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/24\/","name":"arbok"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/25\/","name":"pikachu"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/26\/","name":"raichu"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/27\/","name":"sandshrew"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/28\/","name":"sandslash"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/29\/","name":"nidoran-f"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/30\/","name":"nidorina"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/31\/","name":"nidoqueen"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/32\/","name":"nidoran-m"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/33\/","name":"nidorino"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/34\/","name":"nidoking"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/35\/","name":"clefairy"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/36\/","name":"clefable"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/37\/","name":"vulpix"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/38\/","name":"ninetales"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/39\/","name":"jigglypuff"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/40\/","name":"wigglytuff"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/41\/","name":"zubat"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/42\/","name":"golbat"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/43\/","name":"oddish"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/44\/","name":"gloom"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/45\/","name":"vileplume"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/46\/","name":"paras"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/47\/","name":"parasect"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/48\/","name":"venonat"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/49\/","name":"venomoth"},{"url":"http:\/\/pokeapi.salestock.net\/api\/v2\/pokemon\/50\/","name":"diglett"}]
        // pokemons : []
    }

    renderPokemons() {
        if (this.state.pokemons.length === 0) return <h4>There isn't any pokemon match</h4>;

        return (
            <React.Fragment>
            {this.state.pokemons.map(pokemon => 
                <div key={pokemon.name} className="pokemon-card text-center col-xs-6 col-sm-4 col-md-3">
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
            </React.Fragment>
        )
    }

    getSourceImg(url) {
        const matched_position = url.match(/pokemon.{1,}/ig)[0];
        const id = matched_position.match(/\d+/)[0];
        const source = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png";
        return source;
    }

    getFormattedID(id) {
        return id.length < 3 ? this.getFormattedID(0 + id) : id;
    }

    getPokemonID(url) {
        const matched_position = url.match(/pokemon.{1,}/ig)[0];
        const id = matched_position.match(/\d+/)[0];
        const formated_id = this.getFormattedID(id);

        return formated_id;
    }

    // getPokemonType(url) {
    //     const matched_position = url.match(/pokemon.{1,}/ig)[0];
    //     const id = matched_position.match(/\d+/)[0];

    // }

    render() { 
        return ( 
            <section className="col-sm-8 col-xs-12">
                <div className="pokemons_list thumbnail col-xs-12">
                    {this.renderPokemons()}
                </div>
            </section>
        );
    }
}
 
// export default PokemonList;