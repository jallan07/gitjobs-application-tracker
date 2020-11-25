// This file is used to define all routes related to reading, writing, updating, and deleting contacts from the CRM feature of the app
const db = require('../models');

module.exports = (app) => {
  //* ==========================
  //* GET routes
  //* ==========================
  // Get all
  app.get('/api/Rolodex', (req, res) => {
    db.Rolodex.findAll({}).then((contacts) => res.json(contacts));
  });

  // TODO: Get all by City
  // TODO: Get all by Relationship
  //* ==========================
  //* POST ROUTES
  //* ==========================
  // Add a contact
  app.post('/api/Rolodex', (req, res) => {
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
  // TODO Finish this

  app.delete('/api/rolodex/:id', (req, res) => {
    db.Rolodex.destroy({
      where: {
        id: req.params.id
      }
    }).then((contact) => res.json(contact));
  });
};
