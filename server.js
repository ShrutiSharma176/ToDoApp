const express= require('express');
const mongoose = require('mongoose');
const ToDoRouter =  require("./routes/ToDoRouter.js");

require('dotenv').config();

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use("/",ToDoRouter);

mongoose.connect(process.env.MONGO_URL);

app.listen(5000,()=>{
    console.log("Server Connection established on port 5000");
});