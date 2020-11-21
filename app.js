const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const routes = require('./routes/routes.js');
const linkedinKeys = require('./config/linkedin-keys');

app.set('view engine', 'ejs');

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET',
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(
  new LinkedInStrategy(
    {
      clientID: linkedinKeys.linkedinAuth.clientID,
      clientSecret: linkedinKeys.linkedinAuth.clientSecret,
      callbackURL: linkedinKeys.linkedinAuth.callbackURL,
      scope: ['r_emailaddress', 'r_liteprofile'],
    },
    function (token, tokenSecret, profile, done) {
      return done(null, profile);
    }
  )
);

app.use('/', routes);

const port = 3000;

app.listen(port, () => {
  console.log('App listening on port http://localhost:' + port);
});
