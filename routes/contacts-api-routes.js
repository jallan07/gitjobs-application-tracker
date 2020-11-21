// This file is used to define all routes related to reading, writing, updating, and deleting contacts from the CRM feature of the app
const db = require('../models');
const Sequelize = require('sequelize');

module.exports = (app) => {
  app.get('api/contacts', (req, res) =>
    db.Rolodex.findAll({}).then((contacts) => res.json(contacts))
  );

  app.post('api/contacts/add', (req, res) => {
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
      // Make lowercase and remove space after comma
      contactsCity = style.toLowerCase();

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
};
