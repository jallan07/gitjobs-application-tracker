//! This file offers a set of routes for sending users to the various html pages

//* ===================================================
//* Dependencies
//* ===================================================
const passport = require('passport');

//* ===================================================
//* Routes
//* ===================================================
module.exports = (app) => {
  //* ===================================================
  //* Log-in validation, authentication, and logout
  //* ===================================================

  // Validate user is logged in
  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
  };

  // Get linkedin authentication
  app.get(
    '/auth/linkedin',
    passport.authenticate('linkedin', function (req, res) {
      console.log(res);
    })
  );

  // Get linkedin authentication callback
  app.get(
    '/auth/linkedin/callback',
    passport.authenticate('linkedin', {
      successRedirect: '/landing',
      failureRedirect: '/login'
    })
  );

  // logout the user and send them back to the main index page
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  //* ===================================================
  //* HTML Routes
  //* ===================================================
  // index route loads login page
  app.get('/', (req, res) => {
    res.render('login', {
      layout: 'login.handlebars',
      style: 'login.css'
    });
  });

  app.get('/login', (req, res) => {
    res.render('login', {
      style: 'login.css',
      title: 'Login | GitJobs'
    });
  });

  // Successful login gets the profile for logged in users and renders landing
  // TODO Currently index.handlebars serves as profile page - swap this for job board?
  app.get('/landing', isLoggedIn, (req, res) => {
    res.render('landing', {
      user: req.user,
      photo: req.user.photos[2].value,
      email: req.user.emails[0].value,
      style: 'rolodex.css',
      title: 'User Profile | GitJobs'
    });
  });
};
