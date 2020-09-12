var ProjetOM = require('../models/projet');
var bodyParser = require("body-parser");

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.etape_liste = function (req, res) {
    console.log("------- etape_liste ------");
  ProjetOM.find((err, listeprojet) => {
      if(err) throw err
      //res.render('index', { etape_liste });
        console.log(listeprojet);
      res.render('listeprojet', { listeprojet });
    })

};

exports.etape_create = function (req, res) {
  console.log("------- etape_create ------");
  console.log(req.body);
  console.log("------- P1 ------");
  var p1 = req.body.proj
  console.log(p1);

  //console.log("------- nom ------");
  //var p2 = p1.nom
  //console.log(p2);

  console.log("-------------");
//  if (isNull(p1) ) {
//        res.status(400).json({ message: "la structure p1 or empty please try again! :) "});
//        return;
//    }

  if (isNull(req.body.proj) ) {
        res.status(400).json({ message: "la structure req.body.proj or empty please try again! :) "});
        return;
    }
    var projet = req.body.proj
//  if (isNull(req.query.projet.nom) || isNull(req.query.proj.nom) || isNull(req.query.proj.nom)) {
//        res.status(400).json({ message: "Required body params are undefined or empty please try again! :) "});
//        return;
//    }

    var projetom = new ProjetOM(
        {
            nom: projet.nom,
            description: projet.description,
            uneurl: projet.uneurl
        }
    );

    projetom.save(function (err) {
        if (err) {
            return next(err);
        }
        //res.send('ProjetOM Created successfully')
        res.redirect('/projet')
    })
};

exports.etape_details = function (req, res) {
    ProjetOM.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.etape_update = function (req, res) {
    ProjetOM.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('ProjetOM udpated.');
    });
};

exports.etape_delete = function (req, res) {
    ProjetOM.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

function isNull(checkObject) {
    if (typeof(checkObject) === "undefined" || checkObject == null || checkObject === '') {
        return true;
    }
    return false;
}
