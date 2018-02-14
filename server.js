var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
app.use(express.static(__dirname + '/ui/'));
/*app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
*/
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
app.post('/api/login',function(req,res){
	var results=[{
	title:"java",
	instructor:"Anirban",
	level:"Beginer",
	total_videos:10
	},
	{
	title:"c++",
	instructor:"Anirban",
	level:"Beginer",
	total_videos:10
	},
	{
	title:"php",
	instructor:"Anirban",
	level:"Beginer",
	total_videos:10
	},
	{
	title:"java",
	instructor:"Anirban",
	level:"Beginer",
	total_videos:10
	},
	{
	title:"java",
	instructor:"Anirban",
	level:"Beginer",
	total_videos:10
	}];
	res.json(results);

 })
 

//var express =require('express');
//var app = express();
 
 //var port =3008;
 app.use(express.static(__dirname + '/'));
 //app.listen(port);
 //console.log('Server Started at' + port);

 