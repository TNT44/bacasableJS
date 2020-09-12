let express = require('express')
let router = express.Router()

let mongoose = require('./../config/conexion')
let Nota = require('./../models/nota')

/* GET users listing. */
router.post('/nota/operar', (req, res) => {
  let id = req.body._id
  let date = new Date()
  if(id === '') {
    let note = new Nota ({
      nombre: req.body.nombre,
      contenido: req.body.contenido,
      fecha: `${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`
    })
    note.save()
  } else {
    Nota.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err) => {
      if(err) throw err
    })
  }
  res.redirect('/')
})

module.exports = router
