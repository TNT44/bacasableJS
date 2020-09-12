
const fetch = require("node-fetch");
//const { response } = require('express');
const liburl = require('url').URL;

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')

//import { uploadFileRequest } from './api';
//import * as types from './actionTypes';
//import fileSaver from 'mm/utils/fileSaver';
const fileSaver = require("./mm/utils/fileSaver").fileSaver;

//import fileReader from 'utils/fileReader';
//import { downloadFileRequest } from './mm/api';

const downloadFileRequest = require("./mm/apiServPlantUML").downloadFileRequest;
const uploadFileRequest = require("./mm/apiServPlantUML").uploadFileRequest;
const uploadFileRequestMod = require("./mm/apiServPlantUML").uploadFileRequestMod;
const uploadFile = require("./mm/apiServPlantUML").uploadFile;


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

var url = "http://localhost:9000/essai/listerimageabs";

async function traitement() {

    console.log("Load liste des images abs");
    var page1 = await getData(url);

    //var enreg1 = page1[0];
    //console.log(enreg1);

    var tab = transforme(page1);

    //console.log()reg1
    console.log("Taille du tableau " + tab.length);

    if (tab.length > 0)
    {
    
    var enreg = tab[0];
    console.log(enreg);

    //send(enreg);
    //sendmod(enreg);

    uploadFile(enreg);

    //var id = 104;

    //const { data } = await downloadFileRequest(id);

    // le fileSaver ne fonctionne que dans le navigateur
    //await fileSaver(data, 'fileName.png');
    }

}

// cette fonction ne fonctionne pas
// nous avons une création d'image non conforme
// utilise Axios
async function send(enreg) {
    var id = enreg.id;
    const { data } = await downloadFileRequest(id);

    try {
        await uploadFileRequest(enreg, data);
        console.log('File uploaded successfully!');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log('Something went wrong while uploading this file');
        console.log(error);
      }
    }
}

// cette fonction ne fonctionne pas
// nous avons une création d'image non conforme
// utilise la fonction submit de formdata

async function sendmod(enreg) {
    var id = enreg.id;
    const { data } = await downloadFileRequest(id);

    try {
        await uploadFileRequestMod(enreg, data);
        console.log('File uploaded successfully!');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log('Something went wrong while uploading this file');
        console.log(error);
      }
    }
}

traitement();