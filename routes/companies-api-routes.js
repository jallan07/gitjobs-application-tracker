//! This file is used to define all routes related to reading, writing, updating,
//! and deleting companies from the app

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
  // TODO Add includes for contacts and applications - populate in two divs?
  //* ==========================
  app.get('/api/companies/search', isLoggedIn, (req, res) => {
    const { term } = req.query;
    db.Companies.findAll({
      include: [db.Rolodex, db.Applications],
      where: {
        [Op.or]: [
          { companyName: { [Op.like]: '%' + term + '%' } },
          { companyIndustry: { [Op.like]: '%' + term + '%' } },
          { companyCity: { [Op.like]: '%' + term + '%' } },
          { companyDescription: { [Op.like]: '%' + term + '%' } }
        ]
      }
    }).then((data) => {
      const hbsObject = {
        companies: data,
        user: req.user,
        style: 'landing.css',
        title: 'Companies | GitJobs'
      };
      // res.json(data);
      console.log(hbsObject);
      res.render('landing', hbsObject);
      console.log(hbsObject);
    });
  });

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
      companyIndustry,
      companySector,
      companyCity,
      companyState,
      companyDescription
    } = req.body;

    db.Companies.create({
      companyName,
      companyEmployees,
      companyRevenue,
      companyWebsite,
      companyIndustry,
      companySector,
      companyCity,
      companyState,
      companyDescription
    }).then((company) => res.json(company));
  });

  //* ==========================
  //* Put Routes
  //* ==========================
  // app.put('/api/rolodex/:id', (req, res) => {
  //   db.Companies.update(req.body, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then((contact) => res.json(contact));
  // });

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
