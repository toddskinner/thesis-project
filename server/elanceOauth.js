// Using passport (http://http://passportjs.org/guide/oauth/) to authenticate users with Oauth.

var passportElance = require('passport'), ElanceStrategy = require('passport-oauth').OAuthStrategy; 

var creds = require('./config.js');

//move clientID and secret as to not expose credentials
passport.use(new ElanceStrategy({
    authorizationURL: 'https://api.elance.com/api2/oauth/authorize',
    tokenURL: 'https://api.elance.com/api2/oauth/token',
    clientID: creds.elanceAPI,
    clientSecret: creds.elanceSECRET,
    callbackURL: creds.elanceCallbackURL,
    passReqToCallback: true 
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      done(err, user);
    });
  }
));

module.exports = passportElance;