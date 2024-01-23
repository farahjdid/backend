const express = require('express');
const router = express.Router();
const Rsv = require('../models/reservation');


//créer reservation
router.post('/addrev' , (req, res)=>{

    data = req.body;

    //////
    console.log(req.body);

    rsvs = new Rsv(data);
    
    rsvs.save()
       .then(
            (savedRsv)=>{
                res.send(savedRsv)
            }
       )
       .catch(
            (err)=>{
                res.send(err)
            }
       )
})


router.post('/addres' , async(req, res)=>{

    try {

        console.log(req.body);

        data = req.body;
        rsvs = new Rsv(data);
        console.log(rsvs);

        savedRsv = await rsvs.save();
        console.log(rsvs);

        res.send(savedRsv)
    }
    catch(error) {
        res.send(error)
    }
})  


//update khedama 
router.put('/upres/:id', async(req, res)=>{
    try {
        id = req.params.id;
        newData = req.body;
        updated = await Rsv.findByIdAndUpdate({ _id: id }, newData);

        res.status(200).send(updated);
    }
    catch(error) {
        res.status(400).send(error)
    }
})

//get all khedama
router.get('/all' , async(req, res)=>{
    
    try  {
        rsvs =  await Rsv.find();
        res.status(200).send(rsvs);
    }
    catch (error) {
        res.status(400).send(error)
    }
})

//delete khedama
router.delete('/delres/:id', async(req, res)=>{
    try {
        id = req.params.id;
        newData = req.body;
        deleted = await Rsv.findByIdAndDelete({ _id: id }, newData);

        res.status(200).send(deleted);
    }
    catch(error) {
        res.status(400).send(error)
    }
})


module.exports = router;