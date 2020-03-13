const Task = require("../models/task");
 
exports.addTask = function (request, response){
    response.render("createTask.hbs");
};
exports.getTasksAdmin = function(request, response){
     
    Task.find({}, function(err, allTasks){
  
        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("admintask.hbs", {
            tasks: allTasks
        });
    });
};
exports.getTasks = function(request, response){
     
    Task.find({}, function(err, allTasks){
  
        if(err) {
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("tasks.hbs", {
            tasks: allTasks
        });
    });
};

exports.getTask = function(request, response) {
 
    const executorName = request.this.name;
    const task = request.this.task;
    return Task
    .findOne({name: executorName, task: task})
    .then(function(doc){
    if ( doc.executorName == name ){
        response.render("createTask.hbs");
    } 
    else {
        console.log("err");
    }
    })
};



exports.postTask= function(request, response){
    if(!request.body) 
        return response.sendStatus(400);
    const executorName = request.body.name;
    const executorEmail = request.body.email;
    const task = request.body.task;
    const newTask = new Task({email: executorEmail, executorName: executorName, task: task});
     
    newTask.save(function(err){
        if(err) return console.log(err);
        response.redirect("/admin");
    });
};