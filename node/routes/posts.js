const router = require("express").Router();
const User = require("../models/Users")
const Posts = require ("../models/Posts")

// Create Posts
router.post("/", async (req, res) =>{
    const newPost = Posts(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
});

// Update post 
router.put("/:id", async (req, res) =>{
    try{
        const post = await Posts.findById(req.params.id)
        if (post.username === req.body.username){
            try{
                const updatePost = await Posts.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatePost)
            } catch(err){
                res.status(500).json(err);
            }
        }else{
            res.status(401).json("You can update only posts")
        }
    } catch(err){
        res.status(500).json(err);
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const post = await Posts.findById(req.params.id);
        if (post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json("Post has been deleted")
            }catch(err){
                res.status(500).json(err);
            }
        }else{
            res.status(401).json("You can delete only Your posts")
        }
    } catch(err){
        res.status(500).json(err);
    }
})

//GET POST
router.get("/:id", async (req, res) => {
    try {
      const post = await Posts.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Get All post and Limits by 6 items and sort
router.get("/", async (req, res) => {

    const username = req.query.user;
    const catName = req.query.cat;

    try{
        let posts;
        if(username) {
            posts = await Posts.find({username})
        } else if(catName) {
            posts = await Posts.find({
                categories: {
                    $in:[catName],
                },
            });

        }else{
            posts = await Posts.find().sort({_id: -1}).limit(3);
        }
        res.status(200).json(posts);
    }catch (err){
        res.status(500).json(err)
    }
});

// Get All poss by sort
router.get('/all/post', async (req, res) => {

    const username = req.query.user;
    const catName = req.query.cat;

    try{
        let posts;
        if(username) {
            posts = await Posts.find({username})
        } else if(catName) {
            posts = await Posts.find({
                categories: {
                    $in:[catName],
                },
            });

        }else{
            posts = await Posts.find();
        }
        res.status(200).json(posts);
    }catch (err){
        res.status(500).json(err)
    }
});

module.exports = router;