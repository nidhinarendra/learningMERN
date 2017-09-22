const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const app = express();

authRoutes(app);

//if there is no envirnoment variable defined in our development app then use 5000 (so it is 'or')
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('The app is listening on port ' + PORT);
