import express from "express"
import {createUser , getUser} from '../controllers/user.js'

const router = express.Router();

router.post("/login", getUser);
router.post("/signup", createUser);

export default router; 
