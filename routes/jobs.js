const router = require("express").Router()
const   Jobs = require("../models/Jobs")

// Create jobs
router.post("/", async(req, res) =>{
    const newJob = Jobs(req.body)
    try{
        const saveJob = await newJob.save()
        res.status(200).json(saveJob)
    }catch(err){
        res.status(500).json(err)
    }
})


router.get("/", async(req, res) =>{
    try{
        const job = await Jobs.find();
        res.status(200).json(job)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router