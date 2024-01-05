var dotenv = require('dotenv');
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors())
dotenv.config()

app.get('/', function(req, res) {
	res.send('Hello!')});

app.get('/api', cors(), function(req, res) {
	res.setHeader('Acces-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.send({url: `${backendurl = process.env.URL}`});
});


app.listen(3000, function() {
	console.log('App listening on port: 3000');
});
