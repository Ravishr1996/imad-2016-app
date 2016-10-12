var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne ={
    title: 'Article one By RRP',
    heading: ' Article One By RRP ',
    date: 'Sept 25th 2016',
    content: ` <p>
                    This Is The Content of My first Article Made a begginer programmer ravi roshan pandey.. Pls wish me Luck So i can use up my skills and be the best programmer in the world.
                </p>
           
                     <p>
                    This Is The Content of My first Article Made a begginer programmer ravi roshan pandey.. Pls wish me Luck So i can use up my skills and be the best programmer in the world.
                    </p>
           
                        <p>
                        This Is The Content of My first Article Made a begginer programmer ravi roshan pandey.. Pls wish me Luck So i can use up my skills and be the best programmer in the world.
                         </p>`
    
    
    
    
};

function createTemplate (data)  {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content; 
    
    var htmlTemplate = `<html>
    <head>
       <title>
           ${tilte}
       </title>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
   </head> 
   <body>
       <div class="container">
         
        <div>
          <a herf="/">Home</a> 
    
        </div>
        <hr/>
        <h3>
            ${haeding}
        </h3>
        <div>
           ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
        <div>
            <script>
                 alert (" This is the javascript of the Article one ");
                 alert ( " This is the 2nd line of the java script of the article one ");
            </script>
        </div>
   </body>
 </html>
 `; 
 return htmlTemplate;
}



app.get('/', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
 
app.get('/article-one', function (req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
