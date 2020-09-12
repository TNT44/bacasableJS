let mongoose = require('mongoose')
let Schema = mongoose.Schema

let notaSchema = new Schema({
    id: { type: String },
    nombre: { type: String },
    contenido: { type: String },
    fecha: { type: String }
}, {versionKey: false})

let Nota = mongoose.model('Notas', notaSchema)
module.exports = Nota