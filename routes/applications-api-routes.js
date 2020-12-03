// This file is used to define all routes related to reading, writing, updating, and deleting applications from the application tracker feature of the app
const db = require('../models');
const passport = require('passport');
const { Op } = require('sequelize');

// Validate user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
};

// TODO Add includes companies syntax

module.exports = (app) => {
  //* ==========================
  //* GET routes
  //* ==========================
  //* PASSED TESTING IN POSTMAN
  // get all jobs
  app.get('/jobboard', isLoggedIn, (req, res) => {
    db.Applications.findAll({ include: db.Companies }).then((data) => {
      const hbsObject = {
        applications: data,
        user: req.user,
        style: 'applications.css',
        title: 'Application Tracker & Job Board | GitJobs'
      };
      console.log(data);
      res.render('applications', hbsObject);
    });
  });

  //* PASSED TESTING IN POSTMAN
  // Search for all jobs by name, company, status, or next step
  app.get('/api/applications/search', isLoggedIn, (req, res) => {
    const { term } = req.query;
    db.Applications.findAll({
      where: {
        [Op.or]: [
          { jobName: { [Op.like]: '%' + term + '%' } },
          { jobCompany: { [Op.like]: '%' + term + '%' } },
          { jobStatus: { [Op.like]: '%' + term + '%' } },
          { jobNextStep: { [Op.like]: '%' + term + '%' } }
        ]
      }
    }).then((data) => {
      const hbsObject = {
        applications: data,
        user: req.user,
        style: 'applications.css',
        title: 'Application Tracker & Job Board | GitJobs'
      };
      res.render('applications', hbsObject);
    });
  });

  //* ==========================
  //* POST ROUTES
  //* ==========================
  //* PASSED TESTING IN POSTMAN
  // create a new job
  app.post('/api/applications', (req, res) => {
    // destructure the object variables
    const {
      jobName,
      jobLink,
      jobSalary,
      jobHiringMgrName,
      jobHiringMgrTitle,
      jobHiringMgrEmail,
      jobStatus,
      jobNextStep,
      jobCompany,
      applied
    } = req.body;
    // use the variables above in the create method below
    db.Applications.create({
      jobName,
      jobLink,
      jobSalary,
      jobHiringMgrName,
      jobHiringMgrTitle,
      jobHiringMgrEmail,
      jobStatus,
      jobNextStep,
      jobCompany,
      applied
    }).then((job) => res.redirect('/jobboard'));
  });

  //* ==========================
  //* Put Routes
  //* ==========================
  // //! TEST PENDING -- REQUIRES FRONTEND LOGIC
  // // update job
  // app.put('/api/applications', (req, res) => {
  //   db.Applications.update(req.body, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then((job) => res.json(job));
  // });

  //* ==========================
  //* Delete Routes
  //* ==========================
  //* PASSED TESTING IN POSTMAN
  // delete job
  app.delete('/api/applications/:id', (req, res) => {
    db.Applications.destroy({
      where: {
        id: req.params.id
      }
    }).then((job) => res.json(job));
  });
};
