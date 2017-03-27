var express = require('express');

var https = require('https');

var app = express();

app.set('port', (process.env.PORT || 5000));

var Client = require('node-rest-client').Client;  

var restC = new Client();

app.set('view engine','ejs');

app.get('/hello',function(req,res) {
	console.log('Haha');
	res.send('Hello World');
});





app.get('/',function(req,res){

	console.log('FirstLine');


	var baseURL = "https://api.github.com/repos/google/EarlGrey/issues?state=open";

var headers = {  
  "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36"
}
var httpArgs = {  
  "headers": headers
}
console.log('SecondLine');
var reqObject;
restC.get(baseURL,httpArgs,function(data,response){
	
    
	reqObject = data;	
   
    res.render('pages/List',{data: reqObject});

}); 







});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
