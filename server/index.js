const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');
const app = express();

//connect mongodb
mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

//to use cookies in our application

//if there is no envirnoment variable defined in our development app then use 5000 (so it is 'or')
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('The app is listening on port ' + PORT);
