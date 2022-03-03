//1)setting up the server
const express = require('express');
const app = express();
const port = 8000;
//requiring the mongoose and the schema
const db = require('./config/mongoose');
const ToDo = require('./models/To do'); 
//middleware for the forms
app.use(express.urlencoded()); 
//setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');
//setting up the static files
app.use(express.static('./assets'));
//requiring the routes from routes -> index.js to main index.js
app.use('/', require('./routes')); 

//1)setting up the server
app.listen( port, function(err){
    if(err){
        console.log(`There is error in setting up the server at port ${port}`);
    }
    console.log(`The express is running perfectly at port ${port}`);
});