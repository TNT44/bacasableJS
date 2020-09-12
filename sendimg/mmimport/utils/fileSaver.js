//import FileSaver from 'file-saver';
const FileSaver = require("file-saver");

export default (fileData, fileName) => FileSaver.saveAs(fileData, fileName);