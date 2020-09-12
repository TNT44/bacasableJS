const Axios = require('axios')

const urlload = 'http://odroid.local/ServPlantUml/downimg/getpicture?id=';
var urldest = "http://localhost:9000/DownImg/sync";

/**
 * Upload un fichier vers urldest.
 * @param {*} enreg un enregistrement
 * @param {*} file un blob contenant le fichier
 */
export const uploadFileRequest = ( enreg, file ) => {

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


/**
 * download un fichier depuis urlload.
 * @param {*} id Id du fichier
 */
export const downloadFileRequest = id =>
    Axios.get(urlload + `${id}`, {
        responseType: 'blob',
        timeout: 30000,
    });