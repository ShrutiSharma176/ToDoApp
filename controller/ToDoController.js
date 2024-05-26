const ToDoModel = require("../model/ToDoModel.js");

module.exports.getToDo = async(request,response)=>{
    const toDo = await ToDoModel.find();
    console.log(toDo);
    response.send(toDo);
}

module.exports.saveToDo = async(request,response)=>{
    const obj = {
        text: request.body.text,
        desc:request.body.desc,
        dueDate:request.body.dueDate
    }

    var res = await ToDoModel.create(obj);
    console.log(res)
}

module.exports.deleteToDo = (request,response)=>{
    const {_id} = request.body;
    ToDoModel.findByIdAndDelete(_id).then(()=> res.set(201).send("Deleted Successfully....")).catch((err)=>{console.log((err))});
}

module.exports.updateToDo = (request,response)=>{
    const {_id,text,desc,dueDate} = request.body;
    ToDoModel.findByIdAndUpdate(_id,{text,desc,dueDate}).then(()=> res.set(201).send("Updated Successfully....")).catch((err)=>{console.log((err))});
}
