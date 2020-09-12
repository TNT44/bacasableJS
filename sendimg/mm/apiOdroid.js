
const urlload = 'http://localhost:9000/downimg/getpicture?id=';
var urldest = "http://odroid.local/ServPlantUml/DownImg/sync";
var FormData = require('form-data');
var request = require('request');

/**
 * Upload un fichier vers urldest.
 * @param {*} enreg un enregistrement
 */
const uploadFile = (enreg) => {

    let formData = new FormData();
    formData.append("nom", enreg.titre);
    formData.append("theme", enreg.nomtheme);
    formData.append("fileTouilleur", 
    request(urlload + `${enreg.id}`), 
    enreg.nomfichier);

    formData.submit(urldest, function(err, res) {
        // res – response object (http.IncomingMessage)  //

        if(err) 
        {
            console.log('something goes wrong!');
            console.log("err");
        } else {
            console.log('File uploaded successfully!');
            console.log(res.statusCode);
        }

        res.resume();
      });

};

module.exports = {
    uploadFile : uploadFile
}   