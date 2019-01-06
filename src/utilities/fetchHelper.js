import mockedPokemonInfo from '../mockedApi/pokemonInfo.json';
import mockedPokemonSpecies from '../mockedApi/pokemonSpecies.json';

export default {
    get : {
        pokemonList : (offset, url, limit, cb) => {
            const url_to_fetch = url + "pokemon/?limit=" + limit + "&offset=" + (offset ? offset : 0);
            fetch(url_to_fetch)
            .then( res => res.json() )
            .then(json => {
                cb(json, offset);
            })
        },

        pokemonSpecie : (api_url, id, cb, aditional_info) => {
                cb(mockedPokemonSpecies)
        //     const url_to_fetch = api_url + "pokemon-species/" + id;
        //     fetch(url_to_fetch)
        //     .then( res => res.json() )
        //     .then(json => {
        //         console.log(json)
        //         // this.cb(json, id);
        //     })
        },

        pokemonInfo : (api_url, id, cb, aditional_info) => {
            cb(mockedPokemonInfo, aditional_info);
            // const url_to_fetch = api_url + "pokemon/" + id;
            // fetch(url_to_fetch)
            // .then(res => {
            //     console.log(res);
            //     return res.json();
            // })
            // .then(json => {
            //     console.log(json)
            //     cb(json);
            // })
        }
    }
};