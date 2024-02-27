var express = require('express');
var router = express.Router();
let EmployeeModel= require("../model/Employee");
const bcrypt=require("bcrypt")
const {log} = require("debug");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.post("/register",(req,res)=>{
  const {name,email,password}=req.body;
  bcrypt.hash(password,10)
      .then(hash=>{
          EmployeeModel.create({name,email,password:hash})
              .then(employees=>res.json(employees))
              .catch(err=>res.json(err))
      }).catch(e=>console.log(e))

})

router.post("/login",(req,res)=>{
  const {email,password}=req.body;
  EmployeeModel.findOne({email:email})
      .then(user=>{

        if(user){
            bcrypt.compare(password,user.password,(err,response)=>{

                if(response){
                    res.json("success")
                }
                else {
                    res.json("the password is incorrect")
                }
            })
          }else {
            res.json("password incorrect")
          }

      })
})
module.exports = router;
