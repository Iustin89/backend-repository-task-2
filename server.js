// server.js

// CONFIGURARI/VARIABILE DE BAZA
// =====================================================================================================================================

// cream variabilele si apelam pachetele necesare aplicatiei
var http = require('http');
var express = require('express');
var exphbs = require('express-handlebars');
var moment = require('moment');
var bodyParser = require('body-parser');
var api = require('instagram-node').instagram();
var app = express();

Instagram = require('instagram-node-lib');

Instagram.set('client_id', 'caf0205ad64b4ab5a796e782a48f8a89');
Instagram.set('client_secret', '6b388c603c374dd1a39e0a3bd066dac6');
Instagram.set('redirect_uri', 'https://twitter.com/?lang=en');

//var redirect_uri = 'http://yoursite.com/handleauth';

// CONFIGURARI NECESARE LUCRULUI CU bodyParser() - ne va permite sa returnam data dintr-un POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));


app.set('port', process.env.PORT || 3030);                  // setam un port definit de noi local 