const express = require('express');
const mongoose = require('mongoose');

let app= express();
async function connect(){
   let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/sana4');
   if (!connection) {
    console.log('noo')
   } else {
    console.log('good')
  }
}
connect()
const studentSchema=new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  address: String,
});
let studentModel=mongoose.model("students",studentSchema);

const courseSchema = new mongoose.Schema({
  name: String,
  description: String,
});

let CourseModel = mongoose.model('Course', courseSchema);

let newstudet= new studentModel({
  name: "mariam",
  age: 20,
  phone: "010234556",
  address: "ismailia", 

}).save();
let newcourses= new CourseModel({
  name: "CS",
  description:"Computer science focuses on the development and testing of software and software systems" 
}).save();

let newsALI= new studentModel({
  name: "Ali",
  age: 21,
  phone: "010234556",
  address: "ismailia", 

}).save();
let newIs= new CourseModel({
  name: "IS",
  description:" It is an interconnected set of components used to collect, store, process and transmit data and digital information" 
}).save();

app.get('/student', async(req,res)=>{

  let allStudent = await studentModel.find();
  res.status(200);
  res.json(allStudent)
})

app.get("/course", async (req, res) => {
  let allCourse = await CourseModel.find();
  res.status(200);
  console.log(allCourse.length);
  res.json(allCourse);
});

app.listen(3000, function(){
    console.log('server now is opend')
})
app.get('/',(req,res)=>{
  res.send('welcome ya Ommmryyyy')
} )