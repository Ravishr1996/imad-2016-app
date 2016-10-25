Skip to content
This repository
Search
Pull requests
Issues
Gist
 @Ravishr1996
 Watch 0
  Star 0
  Fork 3,988 Ravishr1996/imad-2016-app
forked from hasura-imad/imad-2016-app
 Code  Pull requests 0  Projects 0  Wiki  Pulse  Graphs  Settings
Tree: 0516535e4b Find file Copy pathimad-2016-app/server.js
0516535  5 days ago
@Ravishr1996 Ravishr1996 [imad-console] Updates server.js
2 contributors @Ravishr1996 @coco98
RawBlameHistory     
70 lines (44 sloc)  1.43 KB
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



app.get('/', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());

});

var names=[];
app.get('/submit-name',function (req,res) {
    var name= req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});




 
app.get('/article-one', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});


app.get('/article-two', function (req,res){
    res.send(createTemplate(articleTwo));
});

app.get('/article-three', function (req,res){
    res.send(createTemplate(articleThree));
});

app.get('/new-page', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'new-page.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
Contact GitHub API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Status Help