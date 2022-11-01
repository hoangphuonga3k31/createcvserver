'use strict';
module.exports = function(app) {
  let UserPersonalnfoCtrl = require('./controllers/UserPersonalInfoController');
  let UserProfileCtrl = require('./controllers/UserProfileController');
  let ApliedJobCtrl = require('./controllers/ApliedJobsListController');
  let jobsCtrl = require('./controllers/JobsController');
  let cvinfoCtrl = require('./controllers/CreateCVController')
  let oldJobCtrl = require('./controllers/OldJobsController')
  let projectsCtrl = require('./controllers/ProjectsController')

  // userpersonalinfo Routes
  app.route('/userpersonalinfo')
    .get(UserPersonalnfoCtrl.get)
    .post(UserPersonalnfoCtrl.store);

  app.route('/userpersonalinfo/:userID')
    .get(UserPersonalnfoCtrl.detail)
    .put(UserPersonalnfoCtrl.update)
    .delete(UserPersonalnfoCtrl.delete);

  //userprofile Routes
  app.route('/userprofile')
    .get(UserProfileCtrl.get)
    .post(UserProfileCtrl.store);

  app.route('/userprofile/:userID')
    .get(UserProfileCtrl.detail)
    .put(UserProfileCtrl.update)
    .delete(UserProfileCtrl.delete);

  //jobslist Routes
  app.route('/apliedjobslist')
  .get(ApliedJobCtrl.get)
  .post(ApliedJobCtrl.store);


app.route('/apliedjobslist/:userID')
  .get(ApliedJobCtrl.detail)
  .put(ApliedJobCtrl.update)
  .delete(ApliedJobCtrl.delete);

//jobs Routes
  app.route('/jobs')
  .get(jobsCtrl.get)
  .post(jobsCtrl.store);


app.route('/jobs/:id')
  .get(jobsCtrl.detail)
  .put(jobsCtrl.update)
  .delete(jobsCtrl.delete);

  //cv Routes
  app.route('/cvinfo')
  .get(cvinfoCtrl.get)
  .post(cvinfoCtrl.store);


app.route('/cvinfo/:userhash')
  .get(cvinfoCtrl.detail)
  .put(cvinfoCtrl.update)
  .delete(cvinfoCtrl.delete);

  //cv oldjobs
  app.route('/oldjobs')
  .get(oldJobCtrl.get)
  .post(oldJobCtrl.store);


app.route('/oldjobs/:cvid')
  .get(oldJobCtrl.detail)
  .put(oldJobCtrl.update)
  .delete(oldJobCtrl.delete);

//projects
  app.route('/projects')
  .get(projectsCtrl.get)
  .post(projectsCtrl.store);


app.route('/projects/:cvid')
  .get(projectsCtrl.detail)
  .put(projectsCtrl.update)
  .delete(projectsCtrl.delete);

};


