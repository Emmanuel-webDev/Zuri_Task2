const express = require('express');
const userdb = require('../DB/userModel')

const route = express()

route.post('/api', async(req, res)=>{
     const {name} = req.body
     if(typeof name !== "string"){
          return res.json({msg: "Field requires only a string"})
     }
     const newUser = new userdb({
        name: req.body.name
     })
        await newUser.save()
    res.status(201).send({msg: "New user created"});
});

route.get("/api/:id", async(req, res)=>{
    const userInfo = await userdb.findById({_id: req.params.id})
    if(!userInfo){
      return res.status(404).send("Not found")
    }
    res.status(200).json(userInfo)
});

route.patch("/api/:id", async(req, res)=>{
    const {name} = req.body
   const editInfo = await userdb.findByIdAndUpdate({_id: req.params.id}, {
    name : req.body.name
   })

   if(!editInfo){
    return res.status(404).json({msg: "Cant find user you want to update"})
   }

   res.status(201).json({msg: "User info updated"})
});

route.delete("/api/:id", async(req, res)=>{
    await userdb.findByIdAndDelete({_id: req.params.id})
    res.status(200).json({msg: 'Done'})
});

module.exports = route