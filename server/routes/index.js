var express = require('express');
var router = express.Router();
let EmployeeModel= require("../model/Employee");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.post("/register",(req,res)=>{
  EmployeeModel.create(req.body)
      .then(employees=>res.json(employees))
      .catch(err=>res.json(err))
})
module.exports = router;
