// Backend code to delete the task/tasks and error ( if it exists )

const Todo = require('../models/To do'); //requiring To do schema

module.exports.deletetask =  async function(req,res){ //Controller action
    //find the todo object through its id
    //delete it from the the dB
    // fetch all the todo objects from the db and render them OR redirect the page to res.redirect('/') so that it will go and reload the home.js file and render home.ejs render 
    //render the home page
    console.log('*******', req.body.id1);
    try{
        console.log('########', typeof(req.body.id1));
        if( typeof(req.body.id1) == 'string' ){ //If a sibgle task is to be deleted
            let todo = await Todo.findById( req.body.id1 ) //in req.body.id1, whatever value you have given to name attribute, same comes over here
            console.log(todo);
            todo.remove();
        }
        else{ //if more than 1 task is to be deleted
            for( let i of req.body.id1 ){ //for every i it will await and remove
                console.log( 'the value of i is ', i );
                let todo = await Todo.findById( i ) //in req.body.id1, whatever value you have given to name attribute, same comes over here
                console.log(todo);
                todo.remove();
            }
        }
        return res.redirect('/'); //redirecting   
    } catch(err){  //if there is error in deleting the task
        console.log('Error in deleting the task', err);
    }
  
}

//DELETE TASK FUNCTIONALITY:
//See basically how the flow works here is, when the delete button is clicked on the front end, whatever input checkoxes the user had checked comes over here in this controller action ( since we had defined this acontroller path in the form's action attribute  of delete functonality ) in the form of key-value pairs.
//Key being the name attribute and value being the value attribute eg. id1 [1, 2, 3 ..] where id1 is the key and 1,2,3 are the multiple values. Note that there can be single value also like id1 [1].
//Then once we reach here in this action in key value pairs, there is IF & ELSE conditions for single/multiple values while deleting.
//And then after deleting  we redirect back to homepage, so home.js file of controllers -> fetches all the data from db -> renders the data to the home.ejs file
//And thats how everything is visible to us on screen.
//And if we click on delete button in the front end without checking any i/ps then it will go in ELSE -> come out of for loop coz there in notinh in it -> redirect. It basically gives us error: Error in deleting the task TypeError: req.body.id1 is not iterable and we get ******* undefined, ######## undefined in the console
//In codeial we deletd the comments twice ( in post array as well as db ) coz apart from comments in db, there is a comment schema in post as well which needs to be deleted. But thats not the case here with task as task is created only once in db.