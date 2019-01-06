import FetchHelper from '../../utilities/fetchHelper.js';
import constants from '../../utilities/constants.js';

export default {

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
                if (/special\W(attack|defense)/i.test(stat.stat.name)) {
                    const splited_name = stat.stat.name.split("-");
                    const prefix = splited_name[0].replace("special", "sp ")
                    const subfix = splited_name[1].replace("attack", "atk").replace("defense", "def")
                    stat.stat.name = prefix + subfix;
                }
                stats_list.push({
                    "name": stat.stat.name,
                    "base_stat": stat.base_stat
                });
            })
            stats_list.sort(function (a, b) {
                if(a.name === "hp"){
                    return -2;
                }
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });
            return stats_list;
        }

        const getAbilities = (raw_abilities) => {
            let abilities_list = [];
            raw_abilities.forEach(function(ability){
                const parsed_name = ability.ability.name.replace(/-/g, " ")
                abilities_list.push(parsed_name);
            })
            return abilities_list.join(", ");
        }

        const getAttackEffort = (stats_list) => {
            const sp_attk_item = stats_list.filter(function(item) {
                return item.stat.name === "special-attack"
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
                        "name" :"Capture Rate",
                        "value" : species.capture_rate
                    },{
                        "name" :"Egg Groups",
                        "value" : getEggGropus(species.egg_groups)
                    },{
                        "name" :"Abilities",
                        "value" : getAbilities(info.abilities)
                    },{
                        "name" :"Gender Rate",
                        "value" : species.gender_rate
                    },{
                        "name" :"Hatch Counter",
                        "value" : species.hatch_counter
                    },{
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