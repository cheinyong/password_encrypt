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

router.post("/login",(req,res)=>{
  const {email,password}=req.body;
  EmployeeModel.findOne({email:email})
      .then(user=>{
        if(user){
          if(user.password===password){
            res.json("success")
          }else {
            res.json("password incorrect")
          }
        }
      })
})
module.exports = router;
