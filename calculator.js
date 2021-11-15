const express = require("express");

const app = express();

//by using body parser we can get the information about the get request
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//__dirname bring us to the current directory path no matter where we are
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){

  //(uses of body parser, then only we assess to body)
  var num1 = Number(req.body.num1);//req.body.num1 return in text form , we have to change it to number form
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("the result of the calculation is "+ result);
})

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
})

app.post("/bmicalculator",function(req,res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight/(height*height);

  res.send("Your BMI is " + bmi);
})

// can me any number for the port
app.listen(3000,function(){
  console.log("server is running on port 3000")
})
