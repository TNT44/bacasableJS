var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let unfichierSchema = new Schema({


    repertoire : {type: String, max: 400},
    nom: {type: String, max: 60},
    taille : { type: Number },
    date : { type: Date, default: Date.now },
    media: { type: String,  max: 40 },

    operation : {type: String,max: 20 }
});

let unfichierom = mongoose.model('unfichier', unfichierSchema)

// Export the model
module.exports = unfichierom
