const express =require('express');
const {getToDo,saveToDo,updateToDo,deleteToDo} = require("../controller/ToDoController.js")

const ToDoRouter = express.Router();

ToDoRouter.get("/get-todo",getToDo);
ToDoRouter.post("/save-todo",saveToDo);
ToDoRouter.post("/delete-todo",deleteToDo);
ToDoRouter.post("/update-todo",updateToDo);

module.exports = ToDoRouter;