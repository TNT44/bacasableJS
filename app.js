var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var crearNota = require('./routes/crearNota');
var login = require('./routes/login');
var projet = require('./routes/projet');
//var projetold = require('./routes/projet2');
var etape = require('./routes/etape');
let cacheProvider = require('./config/cache-provider');


var app = express();

console.log("Start Server")
cacheProvider.start(function(err) {
    if (err) console.error(err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

function setDeepValue(path, obj, value) {
  const tokens = path.split('.');
  const last = tokens.pop();
  for (const token of tokens) {
    if (!obj.hasOwnProperty(token)) {
      obj[token] = {};
    }
    obj = obj[token];
  }
  obj[last] = value;
}

app.use(bodyParser.urlencoded({ extended: true }), function(req, res, next) {
  let obj = {};
  console.log("--- Body parser ---")
  console.log(req.body)
  console.log("---  ---")
  for (const key in req.body) {
    setDeepValue(key, obj, req.body[key]);
  }
  //console.log("--- Body parser = obj---")
  //console.log(obj)
  //console.log("---  ---")
  req.body = obj;
  next();
});

app.use( bodyParser.json() );
//app.use( bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static( path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/crearNota', crearNota);
app.use('/login', login);
//app.use('/projets', projetold);
app.use('/projet', projet);
app.use('/etape', etape);

app.use(function (req, res, next) {
  console.log(req.body) // populated!
  next();
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
