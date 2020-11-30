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
  //* ==========================
  // Get all companies
  //! Passed Postman Testing
  app.get('/api/companies', (req, res) => {
    db.Companies.findAll({}).then((companies) => res.json(companies));
  });

  //* ==========================
  //* POST ROUTES
  //* ==========================

  //* ==========================
  //* Put Routes
  //* ==========================

  //* ==========================
  //* Delete Routes
  //* ==========================
};
