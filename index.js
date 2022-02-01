const express = require('express');
const app = express();
const port = 8000;


app.listen( port, function(err){
    if(err){
        console.log(`There is error in setting up the server at port ${port}`);
    }
    console.log(`The express is running perfectly at port ${port}`);
});