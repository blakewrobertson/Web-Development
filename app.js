var express = require('express');
var app = express();
const path = require('path');

const mongo = require('mongodb').MongoClient;
const uri =  "mongodb+srv://:@cluster0-2n09e.mongodb.net/test?retryWrites=true&w=majority"

mongo.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
if (err) {
  console.error(err)
  return
}
});



app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');  
});

app.listen(8080);
