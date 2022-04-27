const express = require('express');
const app=express();
const mongoose = require('mongoose');
const cors = require('cors');
const  CardsModel= require('./models/Cards');


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:berkay22101992@cluster0.nubag.mongodb.net/FullStack?retryWrites=true&w=majority");

app.get("/getCards",(req,res)=>{
    CardsModel.find({},(err,result)=>{
        if (err) {
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.post("/createCards",async(req,res)=>{
    const card=req.body;
    const newCard=new CardsModel(card)
    await newCard.save();
    res.json(card)
})

app.put("/updateCards",async(req,res)=>{
   const newName=req.body.newName;
   const newAge=req.body.newAge;
   const id=req.body.id;

    try {
        await CardsModel.findById(id,(error,updatedCard)=>{
            updatedCard.name=newName;
            updatedCard.age=newAge;
            updatedCard.save();
        })
        
    } catch (error) {
        console.log(error);
    }

    res.json("updated");

})

app.listen(3050,()=>{
    console.log("Server çalışıyor")
})