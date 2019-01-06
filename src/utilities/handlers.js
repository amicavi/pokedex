import FetchHelper from '../utilities/fetchHelper.js';
import constants from '../utilities/constants.js';

export default {

    getPokemonList : (offset, cb) => {
        const addPokemonType = (pokemons, offset) => {
            const parsed_list = [];
            const pushPokemonItem = (info, pokemon) => {
              pokemon.type = info.types[0].type.name;
              parsed_list.push(pokemon);
            }
            
            pokemons.results.forEach(function(pokemon){ 
              FetchHelper.get.pokemonInfo(constants.api_co, pokemon.namem, pushPokemonItem, pokemon)
            })
        
            pokemons.results = parsed_list
            cb(pokemons, offset);
        }
        
        const getList = (offset_param) => {
        const url = constants.api_url;
        const limit = constants.pagination.limit;
        const offset = offset_param ? offset_param : 0
        FetchHelper.get.pokemonList(offset, url, limit, addPokemonType)
        }

        getList(offset)
    },

    getPokemonDetails : (id, cb) => {

        const getEggGropus = (raw_list) => {
            let abilities_list = [];
            raw_list.forEach(function(group){
                abilities_list.push(group.name);
            })
            return abilities_list.join(", ");
        }
        
        const getStats = (raw_stats) => {
            let stats_list = [];
            raw_stats.forEach(function(stat){
                stats_list.push({
                    "name": stat.stat.name,
                    "base_stat": stat.base_stat
                });
            })
            return stats_list;
        }

        const getAbilities = (raw_abilities) => {
            let abilities_list = [];
            raw_abilities.forEach(function(ability){
                abilities_list.push(ability.ability.name);
            })
            return abilities_list.join(", ");
        }

        const getAttackEffort = (stats_list) => {            
            const sp_attk_item = stats_list.filter(function(item) {
                return item.stat.name == "special-attack"
            })

            return sp_attk_item.effort ? sp_attk_item.effort : 0;
        }

        const parseresponse = (species, info) => {
            const poke_profile = {
                "name": info.name,
                "id": info.id,
                "img" : info.sprites.front_default,
                "stats" : getStats(info.stats),
                "profile" :[{
                        // pokemon-species/id
                        "name" :"Capture Rate",
                        "value" : species.capture_rate
                    },{
                        // pokemon-species/id
                        "name" :"Egg Groups",
                        "value" : getEggGropus(species.egg_groups)
                    },{
                        // /pokemon/id
                        "name" :"Abilities",
                        "value" : getAbilities(info.abilities)
                    },{
                        // pokemon-species/id
                        "name" :"Gender Rate",
                        "value" : species.gender_rate
                    },{
                        // pokemon-species/id
                        "name" :"Hatch Counter",
                        "value" : species.hatch_counter
                    },{
                        // /pokemon/id (abilities)
                        "name" :"EVs",
                        "value" : getAttackEffort(info.stats)
                }]
            }
            cb(poke_profile);
        }

        const addSpecieInfo = (info) => {
            FetchHelper.get.pokemonSpecie(constants.api_url, id, parseresponse, info);
        }
      
        FetchHelper.get.pokemonInfo(constants.api_url, id, addSpecieInfo);
    }
};