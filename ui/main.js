

// Counter code
var button = document.getElementById('counter');

button.onclick = function() {
   // create a request object
    var request = new XMLHttpRequest();
//create the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE){
         if (request.status === 200 ){
            var counter = request.responseText;
            var span = document.getElememtById('count');
            span.innerHTML = counter.toString();
         }
        }
        //not done yet
    };
    //make the request
    request.open('GET','http://http://ravishr1996.imad.hasura-app.io/', true);
    request.send(null);
};