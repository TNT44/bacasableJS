let mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost:27017/getwebjs')
//module.exports = mongoose


var dev_db_url = 'mongodb://localhost:27017/malibrairie'
var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
var User = mongoose.model("User", nameSchema);

module.exports = mongoose
