"use strict";

import express      from 'express';
import path         from 'path';
import favicon      from 'serve-favicon';
import logger       from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import routes       from './server/routes/index.route';
import users        from './server/routes/users.route';

const app = express();
routes(app);
users(app);

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, () => {
  console.log('Yoda is listening on port '+ process.env.PORT || 3000);
});

module.exports = app;