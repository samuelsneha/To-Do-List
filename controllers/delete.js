const Todo = require('../models/To do');

module.exports.deletetask =  async function(req,res){
    //find the todo object through its id
    //delete it from the the dB
    // fetch all the todo objects from the db and render them OR redirect the page to res.redirect('/') so that it will go and reload the home.js file and render home.ejs render 
    //render the home page
    console.log('*******', req.body.id1);
    try{
        for( let i of req.body.id1 ){ //for every i it will await and remove
            console.log( 'the value of i is ', i );
            let todo = await Todo.findById( i ) //in req.body.id1, whatever value you have given to name attribute, same comes over here
            console.log(todo);
            todo.remove();
        }
        return res.redirect('/');       
    } catch(err){
        console.log('Error in deleting the task', err);
    }
  
}