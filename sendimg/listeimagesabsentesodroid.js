
const fetch = require("node-fetch");

const uploadFile = require("./mm/apiOdroid").uploadFile;


const getData = async url => {
    console.log("Rentre dans fct");
    try {
        console.log("Interroge le serveur");
        const response = await fetch(url);

        const localbody = await response.json();

        return localbody;
    } catch (error) {
        console.log(error);
    }
    console.log("Quitte fct");

};

function transforme(entree) {

    return entree.map(enreg => {
        var rObj = {};
        rObj.id = enreg.id;
        rObj.nomfichier = enreg.nomfichier;
        rObj.titre = enreg.titre;
        rObj.nomtheme = enreg.untheme.nom;
        return rObj;
    });
}

var url = "http://odroid.local/ServPlantUml/essai/listerimageabs";

async function traitement() {

    console.log("Load liste des images abs");
    var page1 = await getData(url);

    var tab = transforme(page1);

    console.log("Taille du tableau " + tab.length);

    if (tab.length > 0)
    {
    
    var enreg = tab[0];
    console.log(enreg);

    uploadFile(enreg);

    }

}

traitement();