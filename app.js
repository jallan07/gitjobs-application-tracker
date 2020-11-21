const express = require('express');
const app = express();
const session = require('express-session');
const routes = require('./routes/routes.js');
const passport = require('./config/passport');

app.set('view engine', 'ejs');

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

const port = 3000;

app.listen(port, () => {
  console.log('App listening on port http://localhost:' + port);
});
