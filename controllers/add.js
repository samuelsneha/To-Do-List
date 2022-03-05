// Backend code to create the task and error ( if it exists )

const ToDo = require('../models/To do');//requiring To do schema

module.exports.addtask = async function(req,res){ //controller action
    console.log('******', req.body);
    try{
        await ToDo.create({ //creating the task
            content: req.body.description,
            date: req.body.duedate,
            category: req.body.categories
        });
        return res.redirect('back'); //instead of back you can also do '/'
    } catch(err){ //if error exists while creating the task
        console.log('error in creating task', err);
        return res.redirect('back');
    }
 }
 
 //ADD TASK FUNCTIONALITY:
 //See basically the flow is like when we click on add task button in the front end, we come to this controller action -> create the task -> redirect back to homepage.
 //When we redirect back to homepage, so home.js file of controllers -> fetches all the data from db -> renders the data to the home.ejs file
 //And thats how everything is visible to us on screen.
