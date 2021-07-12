var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var costoFechaRouter = require('./routes/costoHastaFecha');
var onlineRouter = require('./routes/Online_Offline');
var grupoIndividuosRouter = require ('./routes/grupoIndividual');
var IntegrantesRouter = require('./routes/Integrantes');
var infoGrupoRouter = require('./routes/infoGrupo');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/costoHastaFecha', costoFechaRouter);
app.use('/Online_Offline', onlineRouter);
app.use('/grupoIndividual', grupoIndividuosRouter);
app.use('/Integrantes', IntegrantesRouter);
app.use('/infoGrupo', infoGrupoRouter);

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
