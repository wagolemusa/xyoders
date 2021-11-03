const router = require("express").Router();
const User = require("../models/Users")
const bcrypt = require("bcrypt")

// Regesiter user
router.post("/register", async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10)
        const hashhedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: hashhedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    
    }catch (err){
        res.status(500).json(err);
    }
    
})

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username})
        !user && res.status(400).json("Wrong Credentials!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Credentials")

        const { password, ...others } = user._doc;
        res.status(200).json(others)
    } catch (err){
        res.status(500).json(err)
    }
    
})

module.exports = router;    