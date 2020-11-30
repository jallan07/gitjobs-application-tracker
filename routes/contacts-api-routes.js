//! This file is used to define all routes related to reading, writing, updating,
//! and deleting contacts from the CRM feature of the app

//* ===================================================
//* Dependencies
//* ===================================================
const db = require('../models');

//* ===================================================
//* Routes
//* ===================================================
module.exports = (app) => {
  //* ==========================
  //* GET routes
  // TODO Add includes companies - can we specify what fields/columns?
  //* ==========================
  // Get all contacts in rolodex
  //! Passed Postman Testing
  app.get('/api/rolodex', (req, res) => {
    db.Rolodex.findAll({}).then((contacts) => res.json(contacts));
  });

  // Get all contacts in rolodex by company
  app.get('/api/rolodex/:contactsCompany', (req, res) => {
    db.Rolodex.findOne({
      where: {
        contactsCompany: req.body.contactsCompany
      }
    }).then((jobs) => res.json(jobs));
  });

  // Get all contacts in rolodex by relationship
  //! Passed Postman Testing
  // TODO: Validation?
  app.get('/api/rolodex/:relationship', (req, res) => {
    db.Rolodex.findAll({
      where: {
        contactsRelationship: req.body.relationship
      }
    }).then((contacts) => res.json(contacts));
  });

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
      contactGithub,
      contactsNotes
    } = req.body;

    const errors = [];
    // Validate Fields
    if (!contactsName) {
      errors.push({ text: 'Please add a name' });
    }
    if (!contactsRelationship) {
      errors.push({ text: 'How do you know this person?' });
    }
    if (!contactsCity) {
      errors.push({ text: 'Where do they live or work?' });
    }
    if (!contactsNotes) {
      errors.push({ text: 'Please add some information about this contact' });
    }
    // Check for errors
    if (errors.length > 0) {
      res.render('rolodex', {
        contactsName,
        contactsRelationship,
        contactsCompany,
        contactsTitle,
        contactsCity,
        contactsPhone,
        contactsEmail,
        contactsLinkedin,
        contactGithub,
        contactsNotes
      });
    } else {
      db.Rolodex.create({
        contactsName,
        contactsRelationship,
        contactsCompany,
        contactsTitle,
        contactsCity,
        contactsPhone,
        contactsEmail,
        contactsLinkedin,
        contactGithub,
        contactsNotes
      })
        .then((contact) => res.json(contact))
        .catch((err) => console.log(err));
    }
  });
  //* ==========================
  //* Put Routes
  //* ==========================
  app.put('/api/rolodex/:id', (req, res) => {
    db.Rolodex.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then((contact) => res.json(contact));
  });

  //* ==========================
  //* Delete Routes
  //* ==========================
  app.delete('/api/rolodex/:id', (req, res) => {
    db.Rolodex.destroy({
      where: {
        id: req.params.id
      }
    }).then((contact) => res.json(contact));
  });
};
