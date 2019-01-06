module.exports = {
    get : {
        pokemonList : (offset, url, limit, cb) => {
            const url_to_fetch = url + "?limit=" + limit + "&offset=" + (offset ? offset : 0);
            fetch(url_to_fetch)
            .then( res => res.json() )
            .then(function(json) {
                return cb(json, offset);
            })
        }
    }
};