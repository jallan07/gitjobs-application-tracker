// This file is used to define all routes related to reading, writing, updating, and deleting contacts from the CRM feature of the app
const db = require('../models');
const Sequelize = require('sequelize');

module.exports = (app) => {
  //* ==========================
  //* GET routes
  //* ==========================
  // Get all
  app.get('/api/contacts', (req, res) => {
    db.Rolodex.findAll({}).then((contacts) => res.json(contacts));
  });

  // TODO: Get all by City
  // TODO: Get all by Relationship
  //* ==========================
  //* POST ROUTES
  //* ==========================
  // Add a contact
  app.post('/api/contacts/add', (req, res) => {
    let {
      contactsName,
      contactsRelationship,
      contactsTitle,
      contactsCity,
      contactsPhone,
      contactsEmail,
      contactsLinkedin,
      contactGithub,
      contactsNotes
    } = req.body;
    console.log(req.body);
    let errors = [];
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
      res.render(
        //TODO Add Handlebars view +,
        //TODO Can I use req.body below instead?
        {
          contactsName,
          contactsRelationship,
          contactsTitle,
          contactsCity,
          contactsPhone,
          contactsEmail,
          contactsLinkedin,
          contactGithub,
          contactsNotes
        }
      );
    } else {
      // Make lowercase
      contactsCity = contactsCity.toLowerCase();

      // Insert into table
      //TODO Can I use req.body below instead?
      db.Rolodex.create({
        contactsName,
        contactsRelationship,
        contactsTitle,
        contactsCity,
        contactsPhone,
        contactsEmail,
        contactsLinkedin,
        contactGithub,
        contactsNotes
      })
        .then((contact) => res.redirect('/contacts'))
        .catch((err) => console.log(err));
    }
  });

  //* ==========================
  //* Put Routes
  //* ==========================
  //TODO Finish this
  app.put('/api/contacts', (req, res) => {
    db.Applications.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then((job) => res.json(job));
  });

  //* ==========================
  //* Delete Routes
  //* ==========================
  //TODO Finish this

  app.delete('/api/contacts/:id', (req, res) => {
    db.Applications.destroy({
      where: {
        id: req.params.id
      }
    }).then((job) => res.json(job));
  });
};
