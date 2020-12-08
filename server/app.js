const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const indexRouter = require('./routes/index');
require('./handlers/passport');


const app = express();




//CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// catch 404page and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



module.exports = app;
