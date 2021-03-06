// import mockedPokemonInfo from '../mockedApi/pokemonInfo.json';
// import mockedPokemonSpecies from '../mockedApi/pokemonSpecies.json';

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
                // cb(mockedPokemonSpecies, aditional_info)
            const url_to_fetch = api_url + "pokemon-species/" + id + "/";
            fetch(url_to_fetch)
            .then( res => res.json() )
            .then(json => {
                cb(json, aditional_info);
            })
        },

        pokemonInfo : (api_url, id, cb, aditional_info) => {
            // cb(mockedPokemonInfo, aditional_info);
            const url_to_fetch = api_url + "pokemon/" + id + "/";
            return fetch(url_to_fetch)
            .then(res => {
                return res.json();
            })
            .then(json => {
                cb(json, aditional_info);
            })
        },

        fullPokemonList : (api_url, cb) => {
            const url_to_fetch = api_url + "pokemon/";
            fetch(url_to_fetch)
            .then( res => res.json() )
            .then(json => {
                cb(json);
            })
        }
    }
};