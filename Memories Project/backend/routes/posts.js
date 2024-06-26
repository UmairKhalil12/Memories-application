import express from "express";
import jwt from 'jsonwebtoken';
import { getPost, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
import axios from 'axios';

const router = express.Router();

export const setAuthToken = (token) => {
    console.log("set auth token", token);
    if (token) {
        // Apply the token to all requests headers
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log("Token set in headers:", axios.defaults.headers.common['Authorization']);
    } else {
        // If there is no token, remove the Authorization header
        delete axios.defaults.headers.common['Authorization'];
        console.log("Token removed from headers");
    }
};


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log("authentication middleware authheader" , authHeader );
    const token = authHeader && authHeader.split(' ')[1];
    console.log("authetication middleware token",token); 
    if (!token) {
        console.log("authentication token not found"); 
        return res.sendStatus(401); 
    }

    jwt.verify(token, 'default_jwt_secret', (err, user) => {
        if (err) {
            return res.sendStatus(403); 
        }
        req.user = user;
        next(); 
    });
};


router.get("/getall/:id", authenticateToken, getPost);
router.post("/create", authenticateToken, createPost);
router.patch("/:id", authenticateToken, updatePost);
router.delete("/:id", authenticateToken, deletePost);
router.patch("/:id/likepost", authenticateToken, likePost);

export default router;
