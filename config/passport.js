const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
// const linkedinKeys = require('./linkedin-keys');
// require('dotenv').config();

// const User = require('../models').Users;

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
      console.log(profile);
      console.log({ token });
      return done(null, profile);
      /*
      process.nextTick(function () {
        User.findOne({
          where: {
            linkedinID: profile.id
          }
        }, function (err, user) {
          if (err) {
            return done(err);
          }
          // No user was found... so create a new user with values from Facebook (all the profile. stuff)
          if (!user) {
            user = new User({
              linkedinID: profile.id,
              firstName: profile.givenName,
              lastName: profile.familyName,
              email: profile.emails[0].value
              // now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
              // facebook: profile._json
            });
            user.save(function (err) {
              if (err) console.log(err);
              return done(err, user);
            });
          } else {
            // found user. Return
            return done(err, user);
          }
        });
      });
       */
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
