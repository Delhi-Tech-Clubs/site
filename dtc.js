import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import expressLayouts from 'express-ejs-layouts';

import indexRouter from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dtc = express();

// view engine setup
dtc.set('views', path.join(__dirname, 'views'));
dtc.set('view engine', 'ejs');
dtc.use(expressLayouts);
dtc.set('layout', 'layout');

dtc.use(logger('dev'));
dtc.use(express.json());
dtc.use(express.urlencoded({ extended: false }));
dtc.use(cookieParser());
dtc.use(express.static(path.join(__dirname, 'public')));

dtc.use('/', indexRouter);

// catch 404 and forward to error handler
dtc.use((req, res, next) => {
  next(createError(404));
});

// error handler
dtc.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default dtc;
