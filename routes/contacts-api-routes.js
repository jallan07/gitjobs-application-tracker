//! This file is used to define all routes related to reading, writing, updating,
//! and deleting contacts from the CRM feature of the app
//* ===================================================
//* Dependencies
//* ===================================================
const db = require('../models');
const passport = require('passport');
const { Op } = require('sequelize');

// Validate user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
};
//* ===================================================
//* Routes
//* ===================================================
module.exports = (app) => {
  //* ==========================
  //* GET routes
  // TODO Add includes companies, add data to the full profile card
  //* ==========================
  // Get all contacts in rolodex on rolodex page load
  //! Passed Postman Testing
  app.get('/rolodex', isLoggedIn, (req, res) => {
    db.Rolodex.findAll({}).then((data) => {
      const hbsObject = {
        contacts: data,
        user: req.user,
        style: 'rolodex.css',
        title: 'Rolodex & CRM | GitJobs'
      };
      console.log(data);
      res.render('rolodex', hbsObject);
    });
  });

  // TODO Debug search - Currently breaks CSS relative pathing
  // Search and findAll contacts in rolodex by name, company, city, or relationship
  // app.get('/rolodex/search', isLoggedIn, (req, res) => {
  //   const { term } = req.query;
  //   db.Rolodex.findAll({
  //     where: {
  //       [Op.or]: [
  //         { contactsName: { [Op.like]: '%' + term + '%' } },
  //         { contactsCompany: { [Op.like]: '%' + term + '%' } },
  //         { contactsCity: { [Op.like]: '%' + term + '%' } },
  //         { contactsRelationship: { [Op.like]: '%' + term + '%' } }
  //       ]
  //     }
  //   }).then((data) => {
  //     const hbsObject = {
  //       contacts: data,
  //       user: req.user,
  //       style: 'rolodex.css',
  //       title: 'Rolodex & CRM | GitJobs'
  //     };
  //     res.render('rolodex', hbsObject);
  //   });
  // });

  //* ==========================
  //* POST ROUTES
  //* ==========================
  // Add a contact
  //! Passed Postman Testing
  app.post('/api/rolodex', (req, res) => {
    const {
      contactsName,
      contactsRelationship,
      contactsCompany,
      contactsTitle,
      contactsCity,
      contactsPhone,
      contactsEmail,
      contactsLinkedin,
      contactsGithub,
      contactsNotes
    } = req.body;

    db.Rolodex.create({
      contactsName,
      contactsRelationship,
      contactsCompany,
      contactsTitle,
      contactsCity,
      contactsPhone,
      contactsEmail,
      contactsLinkedin,
      contactsGithub,
      contactsNotes
    }).then((contact) => res.redirect('/rolodex'));
  });
  //* ==========================
  //* Put Routes
  //* ==========================
  // TODO Update rolodex PUT route and attach to front-end
  // app.put('/api/rolodex/:id', (req, res) => {
  //   db.Rolodex.update(
  //     {
  //       contactsName,
  //       contactsRelationship,
  //       contactsCompany,
  //       contactsTitle,
  //       contactsCity,
  //       contactsPhone,
  //       contactsEmail,
  //       contactsLinkedin,
  //       contactsGithub,
  //       contactsNotes
  //     },
  //     {
  //       where: {
  //         id: req.params.id
  //       }
  //     }
  //   ).then((contact) => res.json(contact));
  // });

  //* ==========================
  //* Delete Routes
  //* ==========================
  app.delete('/api/rolodex/:id', (req, res) => {
    db.Rolodex.destroy({
      where: {
        id: req.params.id
      }
    }).then((contact) => res.status(200).end());
  });
};
