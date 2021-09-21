const router = require("express").Router();
const User = require("../models/Users")
const bcrypt = require("bcrypt");

// UDATE USER
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id){
        if (req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id, 
            {
                $set: req.body,
            },{new: true});
            res.status(200).json(updateUser)
        } catch (err){
            res.status(500).json(err)
        }
        } else {
            res.status(401).json("You can update only your account!")
        }
})


// Delete user
router.delete("/:id", async (req, res) =>{
    if (req.body.userId === req.params.id){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...")
        } catch (err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("You  can only delete your account!")
    }
});

module.exports = router;