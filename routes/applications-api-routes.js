// This file is used to define all routes related to reading, writing, updating, and deleting applications from the application tracker feature of the app
const db = require('../models');

module.exports = (app) => {
  // get all jobs
  app.get('/api/applications', (req, res) => {
    db.Applications.findAll({}).then((jobs) => res.json(jobs));
  });

  // get all jobs of a specific status
  app.get('/api/applications/:status', (req, res) => {
    db.Applications.findAll({
      where: {
        job_status: req.params.status
      }
    }).then((jobs) => res.json(jobs));
  });

  // create a new job
  app.post('api/applications', (req, res) => {
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
      applied
    }).then((job) => res.json(job));
  });

  // update job
  app.put('/api/applications', (req, res) => {
    db.Applications.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then((job) => res.json(job));
  });

  // delete job
  app.delete('/api/applications/:id', (req, res) => {
    db.Applications.destroy({
      where: {
        id: req.params.id
      }
    }).then((job) => res.json(job));
  });
};
