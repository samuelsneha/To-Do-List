const ToDo = require('../models/To do');

module.exports.main = async function(req,res){
//first we have to fetch the data from the database
    try{
        let todos = await ToDo.find( {} );
//then we have to fetch after finding from the dB        
        return res.render('home', {
            //key-values pairs. Whatever we name we use in LHS (keys), that same name should be accessed in the home view file
            all_todos : todos
        });
    } catch (err){
        console.log('Error in findin data from the dB', err ); 
    }
}

