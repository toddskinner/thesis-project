var express = require('express');
var apiRouter = express.Router();
var databaseLogic = require('./databaseLogic.js');
var elanceLogic = require('./eLanceLogic.js');

apiRouter.get('/allCountriesAllLanguages', function(req,res) {
	console.log('heard a request to allCountriesAllLanguages');
  databaseLogic.allCountriesAllLanguages(req,res);
});

apiRouter.get('/countriesForLanguage', function(req,res) {
  console.log('heard a request to countriesForLanguage');
  databaseLogic.countriesForLanguage(req,res);
});

apiRouter.get('/eLanceData', function(req,res) {
   console.log('heard a request to eLanceData');
   freelancersLogic.getElanceData(req,res);
});

apiRouter.get('/odeskData', function(req,res) {
   console.log('heard a request to eLanceData');
   freelancersLogic.getOdeskData(req,res);
});

// Redirect the user to the OAuth 2.0 provider for authentication.  When
// complete, the provider will redirect the user back to the application at
//     /auth/provider/callback
app.get('/auth/elance', passport.authenticate('elance'));
app.get('/auth/odesk', passport.authenticate('odesk'));

// The OAuth 2.0 provider has redirected the user back to the application.
// Finish the authentication process by attempting to obtain an access
// token.  If authorization was granted, the user will be logged in.
// Otherwise, authentication has failed.
app.get('/auth/elance/callback', 
  passport.authenticate('elance', { successRedirect: '/#/selectSubject',
                                      failureRedirect: '/login' }));
app.get('/auth/odesk/callback', 
  passport.authenticate('odesk', { successRedirect: '/#/selectSubject',
                                      failureRedirect: '/login' }));

module.exports = apiRouter;