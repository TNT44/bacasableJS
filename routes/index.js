let express = require('express')
let router = express.Router()

let mongoose = require('./../config/conexion')
let Nota = require('./../models/nota')

// Ver notas de la base de datos
router.get('/', (req, res, next) => {
//Nota.find((err, notas) => {
//    if(err) throw err
//    res.render('index', { notas });
//  })
  res.render('index', {  });
})

// Crear una nota nueva
router.get('/nota/crear', (req, res) => {
  res.render('crearNota', {})
})

// Modificar una nota existente
router.get('/nota/modificar/:id', (req, res) => {
  let id = req.params.id
  Nota.findOne({_id : id}, (err, nota) => {
    if(err) throw err
    res.render('crearNota', { nota })
  })
})

router.get('/nota/eliminar/:id', (req, res) => {
  let id = req.params.id
  Nota.remove({_id : id}, (err) => {
    if(err) throw err
    res.redirect('/')
  })
})

router.get('/nota/ver/:id', (req, res) => {
  let id = req.params.id
  Nota.findOne({_id : id}, (err, nota) => {
    if(err) throw err
    res.render('verNota', { nota })
  })
})

module.exports = router
