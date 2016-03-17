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
var instagram = require('instagram-node-lib');
var io = require('socket.io').listen(server);
var app = express();

// CONFIGURARI NECESARE LUCRULUI CU bodyParser() - ne va permite sa returnam data dintr-un POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// ==================================================================================================================================
var instagram_client_id = 'caf0205ad64b4ab5a796e782a48f8a89';
var instagram_client_secret = '6b388c603c374dd1a39e0a3bd066dac6';

instagram.set('client_id', instagram_client_id);
instagram.set('client_secret', instagram_client_secret);

// =================================================================================================================================
var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Aplicatia face listen la adresa http://%s:%s', host, port)
});

// ===================================================================================================================================
app.get('/', function (req, res) {
    res.render('home');
});

