var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.js');
var goodsRouter = require('./routes/goods.js');
var membersRouter = require('./routes/members.js');
var ordersRouter = require('./routes/orders.js');
var petsRouter = require('./routes/pets.js');
var serviceRouter = require('./routes/service.js');
var shopsRouter = require('./routes/shops.js');

require("./dao/database.js");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/goods', goodsRouter);
app.use('/members', membersRouter);
app.use('/orders', ordersRouter);
app.use('/pets', petsRouter);
app.use('/service', serviceRouter);
app.use('/shops', shopsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
app.listen('3000', function () {
  console.log('3000 端口启动成功');
})
