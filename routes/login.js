let express = require('express')
let router = express.Router()

//let mongoose = require('./../config/conexion')
//let Nota = require('./../models/nota')

// Gestion du login
router.post('/', (req, res, next) => {
//Nota.find((err, notas) => {
//    if(err) throw err
//    res.render('index', { notas });
//  })
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);

  res.redirect('/projet')
})

// Lister les projets
router.get('/projets', (req, res) => {
  res.render('listeprojet', {})
})


module.exports = router
