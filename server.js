// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const mongoose= require('mongoose');
const multer= require('multer')
const upload= multer({ dest: 'uploads/new'});

// mongoose.connect(process.env.MONGO_URI);
// const schema= mongoose.Schema;

// const uploads= new schema({});
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/uploads/new",upload.single("file"),function(request,response,next){
  console.log(request.file);
 //response.json({size :request.file.size+"kb"});
  response.json(request.file)
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
