// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const passport = require('passport');

// Routes
// =============================================================
module.exports = (app) => {
  // check whether or not the user is logged in
  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
  };
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', (req, res) => {
    res.render('index'); // load the index.ejs file
  });

  // get the profile for logged in users
  app.get('/profile', isLoggedIn, (req, res) => {
    res.render('pages/profile.ejs', {
      user: req.user // get the user out of session and pass to template
    });
  });

  // get linkedin authentication
  app.get(
    '/auth/linkedin',
    passport.authenticate('linkedin', function (req, res) {
      console.log(res);
    })
  );

  // get linkedin authentication callback
  app.get(
    '/auth/linkedin/callback',
    passport.authenticate('linkedin', {
      successRedirect: '/profile',
      failureRedirect: '/login'
    })
  );

  // get the rolodex for the logged in user
  app.get('/rolodex', function (req, res) {
    res.render('./../views/rolodex');
  });

  // logout the user and send them back to the main index page
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
};
