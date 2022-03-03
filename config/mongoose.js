const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist'); //can give any name instead of todolist and that name will be the name of the dB which will be displayed in Robo3T
const db = mongoose.connection;
db.on('error', console.error.bind( console, 'Error in connecting to MongodB'));
db.once('open', function(){
    console.log('Console to dBase :: MongodB');
});
module.exports = db;