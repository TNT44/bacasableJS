var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let EtapeSchema = new Schema({
    nom: {type: String, required: true, max: 20},
    description: {type: String, max: 200},
    etapeprec : {type: String,max: 20 },
    criterereussite = { type: String,  max: 200 },
    check = {type : boolean },
    projetid = { type: String,  max: 40 },
});

let etapeom = mongoose.model('Etape', EtapeSchema)

// Export the model
module.exports = etapeom
