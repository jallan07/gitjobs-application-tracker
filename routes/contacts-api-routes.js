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
  //* ==========================
  // Get all contacts in rolodex
  //! Passed Postman Testing
  app.get('/api/rolodex', (req, res) => {
    db.Rolodex.findAll({}).then((contacts) => res.json(contacts));
  });

  // TODO: Get all by City

  // Get all contacts in rolodex by relationship
  //! Passed Postman Testing
  // TODO: Validation?
  app.get('/api/rolodex/:relationship', (req, res) => {
    db.Rolodex.findAll({
      where: {
        contactsRelationship: req.params.relationship
      }
    }).then((contacts) => res.json(contacts));
  });

  //* ==========================
  //* POST ROUTES
  //* ==========================
  // Add a contact
  //! Passed Postman Testing
  app.post('/api/rolodex', (req, res) => {
    console.log(req.body);
    const {
      contactsName,
      contactsRelationship,
      // contactsCompany,
      contactsTitle,
      // contactsCity,
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
    // if (!contactsCity) {
    //   errors.push({ text: 'Where do they live or work?' });
    // }
    if (!contactsNotes) {
      errors.push({ text: 'Please add some information about this contact' });
    }
    // Check for errors
    if (errors.length > 0) {
      res.render('rolodex', {
        contactsName,
        contactsRelationship,
        // contactsCompany,
        contactsTitle,
        // contactsCity,
        contactsPhone,
        contactsEmail,
        contactsLinkedin,
        contactGithub,
        contactsNotes
      });
    } else {
      // Insert into table

      db.Rolodex.create({
        contactsName,
        contactsRelationship,
        // contactsCompany,
        contactsTitle,
        // contactsCity,
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
  // TODO Finish this
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
