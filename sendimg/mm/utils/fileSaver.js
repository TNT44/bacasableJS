//import FileSaver from 'file-saver';
const FileSaver = require("file-saver");

//export default (fileData, fileName) => FileSaver.saveAs(fileData, fileName);

function fileSaver(fileData, fileName) {
    return FileSaver.saveAs(fileData, fileName);
  }

module.exports = {
    fileSaver : fileSaver
}