var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//RUTAS ENTREGA 3
var costoFechaRouter = require('./routes/costoHastaFecha');
var onlineRouter = require('./routes/Online_Offline');
var grupoIndividuosRouter = require ('./routes/grupoIndividual');
var IntegrantesRouter = require('./routes/Integrantes');
var infoGrupoRouter = require('./routes/infoGrupo');

//RUTAS ENTREGA 4
var maker = require('./apiServices/maker/routes');
var gestor = require('./apiServices/gestor/routes');
var getMakerOAyudante = require('./apiServices/get/routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//RUTAS ENTREGA 3
app.use('/costoHastaFecha', costoFechaRouter);
app.use('/Online_Offline', onlineRouter);
app.use('/grupoIndividual', grupoIndividuosRouter);
app.use('/Integrantes', IntegrantesRouter);
app.use('/infoGrupo', infoGrupoRouter);

//RUTAS ENTREGA 4
app.use('/', maker);
app.use('/', gestor);
app.use('/', getMakerOAyudante);

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
