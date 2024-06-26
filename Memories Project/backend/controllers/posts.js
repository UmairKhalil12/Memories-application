import { useSelector } from 'react-redux';
import postModel from '../models/postmongo.js';



export const getPost = async (req, res) => {
    try {
        const userId = req.body;
        console.log("getPost" , userId); 
        // const posts = await postModel.find({ userId: userId });
        const posts = await postModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
};


export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new postModel(post);
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};



export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    let updatedpost = await postModel.findById(req.params.id);
    if (!updatedpost) {
        return res.status(404).send("Id Not Found ");
    }
    updatedpost = await postModel.findByIdAndUpdate(req.params.id, post, { new: true })


    res.json(updatedpost)

}
export const deletePost = async (req, res) => {
    let delpost = await postModel.findById(req.params.id)
    if (!delpost) {
        return res.status(404).send("Id not Found")
    }
    delpost = await postModel.findByIdAndRemove(req.params.id)
    res.json("Post deleted")
}
export const likePost = async (req, res) => {
    let likepost = await postModel.findById(req.params.id)
    if (!likepost) {
        return res.status(404).send("Id not Found")
    }
    const update = await postModel.findByIdAndUpdate(req.params.id, { likecount: likepost.likecount + 1 }, { new: true })
    res.json(update)
}