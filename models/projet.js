var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let ProjetSchema = new Schema({
    nom: {type: String, required: true, max: 100},
    description: {type: String, max: 1000},
    uneurl: { type: String,  max: 200 },
});

let projet = mongoose.model('Projet', ProjetSchema)

// Export the model
module.exports = projet
