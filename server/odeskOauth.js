// Using passport (http://http://passportjs.org/guide/oauth/) to authenticate users with Oauth.

var passportOdesk = require('passport'), OdeskStrategy = require('passport-oauth').OAuthStrategy; 

var creds = require('./config.js');

//move clientID and secret as to not expose credentials
passport.use(new OdeskStrategy({
    authorizationURL: 'https://www.odesk.com/api/oauth/authorize',
    tokenURL: 'https://www.odesk.com/api/oauth/token',
    clientID: creds.odeskAPI,
    clientSecret: creds.odeskSECRET,
    callbackURL: creds.odeskCallbackURL,
    passReqToCallback: true 
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      done(err, user);
    });
  }
));

module.exports = passportOdesk;