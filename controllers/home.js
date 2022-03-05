// Backend Code to fetch the data from the dB and then  render it

const ToDo = require('../models/To do'); //requiring To do schema

module.exports.main = async function(req,res){ //Controller action
//first we have to fetch the data from the database
    try{
        let todos = await ToDo.find( {} ); 
//then we have to render after finding from the dB        
        return res.render('home', {
            //key-values pairs. Whatever we name we use in LHS (keys), that same name should be accessed in the home view file
            all_todos : todos
        });
    } catch (err){ //if there is error in finding the task
        console.log('Error in finding data from the dB', err ); 
    }
}

