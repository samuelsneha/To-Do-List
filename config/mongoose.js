//Requiring the mongoose and connecting to the MongoDb

const mongoose = require('mongoose'); //Requiring mongoose
mongoose.connect('mongodb://localhost/todolist'); //Connecting mongoose. Can give any name instead of todolist and that name will be the name of the dB which will be displayed in Robo3T
const db = mongoose.connection; //Soring it in variable db
db.on('error', console.error.bind( console, 'Error in connecting to MongodB'));// If there is an error in connecting to dB
db.once('open', function(){ //If there is no error connecting to dB
    console.log('Console to dBase :: MongodB');
});
module.exports = db; //Exporting