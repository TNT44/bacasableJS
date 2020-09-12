const Axios = require('axios')

const urlload = 'http://odroid.local/ServPlantUml/downimg/getpicture?id=';
var urldest = "http://localhost:9000/DownImg/sync";
var FormData = require('form-data');
var request = require('request');

/**
 * Upload un fichier vers urldest.
 * @param {*} enreg un enregistrement
 * @param {*} file un blob contenant le fichier
 */
const uploadFileRequest = (enreg, file) => {

    let formData = new FormData();
    formData.append("nom", enreg.titre);
    formData.append("theme", enreg.nomtheme);
    formData.append("fileTouilleur", file, enreg.nomfichier);


    return Axios.post(urldest, formData, {
        headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        },
        timeout: 30000,
    });
};


const uploadFileRequestMod = (enreg, file) => {

    let formData = new FormData();
    formData.append("nom", enreg.titre);
    formData.append("theme", enreg.nomtheme);
    formData.append("fileTouilleur", file, enreg.nomfichier);

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

/*
    return Axios.post(urldest, formData, {
        headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        },
        timeout: 30000,
    });
    */
};

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

/*
    return Axios.post(urldest, formData, {
        headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        },
        timeout: 30000,
    });
    */
};


/**
 * download un fichier depuis urlload.
 * @param {*} id Id du fichier
 */
const downloadFileRequest = id =>
    Axios.get(urlload + `${id}`, {
        responseType: 'blob',
        timeout: 30000,
    });

/**
 * cette fonction telecharge une image.
 * @param {*} id 
 */
async function downloadImage(id) {
    const url = 'http://odroid.local/ServPlantUml/downimg/getpicture?id=' + id
    //const path = Path.resolve(__dirname, 'images', 'code.jpg')
    //const writer = Fs.createWriteStream(path)

    const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
    })

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })
}




module.exports = {
    downloadFileRequest: downloadFileRequest,
    uploadFileRequest: uploadFileRequest,
    uploadFileRequestMod : uploadFileRequestMod,
    uploadFile : uploadFile

}   