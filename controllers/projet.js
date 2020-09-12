var ProjetOM = require('../models/projet');
var bodyParser = require("body-parser");
var beautify_html = require('js-beautify');
var htmlmodule = require('html');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.projet_liste = function (req, res) {
    console.log("------- projet_liste ------");
  ProjetOM.find((err, listeprojet) => {
      if(err) throw err
      //res.render('index', { projet_liste });
        console.log(listeprojet);
      res.render('listeprojet', { listeprojet });
    })

};

exports.projet_create = function (req, res) {
  console.log("------- projet_create ------");
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

function process(str) {
  var div ="";
    //var div = document.createElement('div');
    //div.innerHTML = str.trim();

    return format(str, 0).innerHTML;
}

function format(node, level) {

    var indentBefore = new Array(level++ + 1).join('  '),
        indentAfter  = new Array(level - 1).join('  '),
        textNode;

    for (var i = 0; i < node.children.length; i++) {

        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }

    return node;
}


exports.projet_details = function (req, res) {
    console.log("------- projet_details 1.0.3------");
    ProjetOM.findById(req.params.id, function (err, unprojet) {
        if (err) return next(err);

        // load un fichier
        const fs = require('fs');
        const path = require('path');

        //console.log("DIR=" + __dirname );
        var chemin = __dirname;
        var repertoirepub = chemin.replace("controllers","public");
        //console.log("DIR2=" + repertoirepub );

        const filename = path.join(repertoirepub, 'ressource/Detail.html');
        console.log("filename=" + filename );

        var contenu ="toto"
        fs.readFile(filename, (err, content) => {
          console.log(String(content))
          contenu = content;


          //contenu = htmlmodule.prettyPrint(content);
          //contenu = process(content);
          // fusion des data out

        //  var beautify = require('js-beautify').js
        //  contenu = beautify(content, { indent_size: 2, space_in_empty_paren: true })

          var data =
          {
            unprojet,
            contenu
          }

          //res.send(product);
          res.render('vueprojet', { data });
        });


    })
};

exports.projet_update = function (req, res) {
    console.log("------- projet_update ------");
    ProjetOM.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('ProjetOM udpated.');
    });
};

exports.projet_delete = function (req, res) {
  console.log("------- projet_delete ------");
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
