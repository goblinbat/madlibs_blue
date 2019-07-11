require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');

sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));

var user = require('./controllers/usercontroller');
var madlib = require('./controllers/madlibcontroller');
var auth = require('./controllers/authcontroller');

app.use('/auth', auth);   // signup, login
app.use(require('../middleware/validate-session'));
app.use('/user', user);   // update, delete
app.use('/madlib', madlib);

app.listen(3000, function() {
    console.log('App is listening on 3000')
})