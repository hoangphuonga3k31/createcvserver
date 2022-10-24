'use strict';
module.exports = function(app) {
  let UserPersonalnfoCtrl = require('./controllers/UserPersonalInfoController');
  let UserProfileCtrl = require('./controllers/UserProfileController');
  let apliedJobslistCtrl = require('./controllers/ApliedJobsListController');
  let jobsCtrl = require('./controllers/JobsController');

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
  app.route('/apliedJobslist')
  .get(apliedJobslistCtrl.get)
  .post(apliedJobslistCtrl.store);


  app.route('/apliedJobslist/:userID')
    .get(apliedJobslistCtrl.detail)
    .put(appliedJobslistCtrl.update)
    .delete(apliedJobslistCtrl.delete);

//jobs Routes
  app.route('/jobs')
  .get(jobsCtrl.get)
  .post(jobsCtrl.store);


app.route('/jobs/:id')
  .get(jobsCtrl.detail)
  .put(jobsCtrl.update)
  .delete(jobsCtrl.delete);
};


