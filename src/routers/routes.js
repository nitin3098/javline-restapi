
const express = require("express");
const router = new express.Router();


const javlineranking = require("../model/javline-men");






//post method 

router.post("/javline",async(req,res)=>{

    try{
            const javlinedata = new javlineranking(req.body);
           
           const playerdata = await javlinedata.save();
           res.status(201).send(playerdata);
    }
    catch(error){
         res.status(400).send(error);

    }
})

//get method  all players

router.get("/javline",async(req,res)=>{

        try{
                const allplayerdata = await javlineranking.find({}).sort({"ranking":1});
               // console.log(javlinedata);
               
               res.status(200).send(allplayerdata);
        }
        catch(error){
             res.status(400).send(error);
    
        }
    })


//get method get player by id

router.get("/javline/:id",async(req,res)=>{
   
        try{
                const _id = req.params.id;
            
                const oneplayerdata = await javlineranking.findById(_id);
              console.log(oneplayerdata);
               res.status(201).send(oneplayerdata);
        }
        catch(error){
             res.status(400).send(error);
    
        }
    })


//get method get player by name

router.get("/javline/:name",async(req,res)=>{
   
    try{
            const name = req.params.name;
        
            const oneplayerdata = await javlineranking.findOne({name});
            if(!oneplayerdata){
                res.status(500);
            }
         
            res.send(oneplayerdata);
    }
    catch(error){
         res.status(400).send(error);

    }
})

//patch method  update player data 

router.patch("/javline/:id",async(req,res)=>{
   
            try{
                    const _id = req.params.id;
                
                    const updateplayerdata = await javlineranking.findByIdAndUpdate(_id,req.body,{
                            new:true
                    });
                 
                   res.status(201).send(updateplayerdata);
            }
            catch(error){
                 res.status(500).send(error);
        
            }
        })



//delete method  delete player by id

router.delete("/javline/:id",async(req,res)=>{
   
    try{
            const _id = req.params.id;
        
            const deleteplayerdata = await javlineranking.findByIdAndDelete(_id);
         
           res.status(201).send(deleteplayerdata);
    }
    catch(error){
         res.status(500).send(error);

    }
})


module.exports = router;