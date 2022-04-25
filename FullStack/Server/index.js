const express=require("express")
const app=express()
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel=require("./Models/Employees")



app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://admin:berkay22101992@cluster0.nubag.mongodb.net/FullStack?retryWrites=true&w=majority")



app.get("/getEmployee",(req,res)=>{
    EmployeeModel.find({},(err,result)=>{
        if (err) {
            res.json(err)
        }else{
            res.json(result)
        }
    
    })
})

app.post("/createEmployee",async (req,res)=>{
    const employee=req.body
    const newEmployee=new EmployeeModel(employee)
    await newEmployee.save();

    res.json(employee)
})


app.listen(3050,()=>{
    console.log("SERVER ÇALIŞIYOR")
});



