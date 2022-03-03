
const ToDo = require('../models/To do');

module.exports.addtask = async function(req,res){
    console.log('******', req.body);
    try{
    await ToDo.create({
        content: req.body.description,
        date: req.body.duedate,
        category: req.body.categories
    });
    return res.redirect('back'); //instead of back you can also do '/'
    } catch(err){
        console.log('error in creating task', err);
        return res.redirect('back');
    }
 }
 
 
