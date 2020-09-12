let nodeCache = require('node-cache');
let cache = null;

exports.start = function(done) {
    if (cache) return done();
    console.log("Création du cache")
    cache = new nodeCache();
}

exports.instance = function() {
    return cache;
}
