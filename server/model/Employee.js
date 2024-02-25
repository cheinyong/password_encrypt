const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    name:String,
    email:String,
    password:String


});
const EmployeeModel=mongoose.model("employee",EmployeeSchema)
module.exports=EmployeeModel;