const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

// Login using the Linkedin Strategy
passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LIclientID,
      clientSecret: process.env.LIclientSecret,
      callbackURL: process.env.LIcallbackURL,
      scope: ['r_emailaddress', 'r_liteprofile']
    },
    function (token, tokenSecret, profile, done) {
      // console.log(profile);
      return done(null, profile);
    }
  )
);

// In order to help keep authentication state across HTTP requests, Sequelize needs to serialize and deserialize the user. Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
