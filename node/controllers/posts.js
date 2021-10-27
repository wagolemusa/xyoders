import PostMessage from '../models/postsMessage.js'

// retrive posts
export const getPosts = async (req, res) =>{
    try {

        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages)

    } catch (error) {
        res.status(404).json({message: error.message });
        
    }
   
}

// Create posts
export const createPosts = async (req, res)=>{
    const post = req.body;
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({message: error.message});
    }

}

