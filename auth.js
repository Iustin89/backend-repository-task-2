﻿var OAuth = require('oauth').OAuth;

var authentification = new OAuth(
	"https://api.twitter.com/oauth/request_token",
	"https://api.twitter.com/oauth/access_token",
	"",
	"",
	"1.0",
	"http://yourdomain/auth/twitter/callback",
	"HMAC-SHA1"
);

app.get('/auth/twitter', function (req, res) {
    authentification.getOAuthRequestToken(function (error, oauth_token, oauth_token_secret, results) {
        if (error) {
            console.log(error);
            res.send("Error!")
        }
        else {
            req.session.oauth = {};
            req.session.oauth.token = oauth_token;
            console.log('oauth.token: ' + req.session.oauth.token);
            req.session.oauth.token_secret = oauth_token_secret;
            console.log('oauth.token_secret: ' + req.session.oauth.token_secret);
            res.redirect('https://twitter.com/oauth/authenticate?oauth_token=' + oauth_token)
        }
    });
});

app.get('/auth/twitter/callback', function (req, res, next) {
    if (req.session.oauth) {
        req.session.oauth.verifier = req.query.oauth_verifier;
        var oauth = req.session.oauth;

        authentification.getOAuthAccessToken(oauth.token, oauth.token_secret, oauth.verifier,
		function (error, oauth_access_token, oauth_access_token_secret, results) {
		    if (error) {
		        console.log(error);
		        res.send("Error!");
		    } else {
		        req.session.oauth.access_token = oauth_access_token;
		        req.session.oauth, access_token_secret = oauth_access_token_secret;
		        console.log(results);
		        res.send("Succes!");
		    }
		}
		);
    } else
        next(new Error("you're not supposed to be here."))
});