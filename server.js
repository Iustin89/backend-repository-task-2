// server.js

// CONFIGURARI/VARIABILE DE BAZA
// =====================================================================================================================================

// cream variabilele si apelam pachetele necesare aplicatiei
var http = require('http');
var express = require('express');                          
var app = express();                                       
var bodyParser = require('body-parser');

var api = require('instagram-node').instagram();
Instagram = require('instagram-node-lib');

Instagram.set('client_id', 'caf0205ad64b4ab5a796e782a48f8a89');
Instagram.set('client_secret', '6b388c603c374dd1a39e0a3bd066dac6');
Instagram.set('redirect_uri', 'https://twitter.com/?lang=en');

//var redirect_uri = 'http://yoursite.com/handleauth';

// CONFIGURARI NECESARE LUCRULUI CU bodyParser() - ne va permite sa returnam data dintr-un POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('port', process.env.PORT || 3030);                  // setam un port definit de noi local 