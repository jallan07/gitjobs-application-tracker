//! This file is used to define all routes related to reading, writing, updating,
//! and deleting companies from the app

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
  // TODO Add includes for contacts and applications - populate in two divs?
  //* ==========================
  // Get all companies
  app.get('/api/companies', (req, res) => {
    db.Companies.findAll({
      include: [db.Rolodex, db.Applications]
    }).then((companies) => res.json(companies));
  });

  // Get company by name
  app.get('/api/companies/:companyName', (req, res) => {
    db.Companies.findOne({
      where: {
        companyName: req.body.companyName
      }
    }).then((jobs) => res.json(jobs));
  });

  //* ==========================
  //* POST ROUTES
  //* ==========================
  // Add a company
  app.post('/api/companies', (req, res) => {
    console.log(req.body);
    const {
      companyName,
      companyEmployees,
      companyRevenue,
      companyWebsite,
      companyDescription
    } = req.body;

    db.Companies.create({
      companyName,
      companyEmployees,
      companyRevenue,
      companyWebsite,
      companyDescription
    }).then((company) => res.json(company));
  });

  //* ==========================
  //* Put Routes
  //* ==========================
  app.put('/api/rolodex/:id', (req, res) => {
    db.Companies.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then((contact) => res.json(contact));
  });

  //* ==========================
  //* Delete Routes
  //* ==========================
  // TODO: Do we need this?
  app.delete('/api/companies/:id', (req, res) => {
    db.Companies.destroy({
      where: {
        id: req.params.id
      }
    }).then((contact) => res.json(contact));
  });
};
