import userModel from "../models/usermongo.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setAuthToken } from "../routes/posts.js";

export const createUser = async (req, res) => {
    const { name, email, password, phone, age, gender } = req.body;
    console.log('create user', email);
    console.log('create user', password);
    console.log("create user", name, phone, age, gender);
    try {
        console.log("try catch create user");
        const existingUser = await userModel.findOne({ Email: email });
        console.log("after existing usr");
        if (existingUser) {
            console.log("inside existing user", existingUser);
            return res.status(409).json({ message: 'User already exists' });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new userModel({
                Name: name,
                Email: email,
                Password: hashedPassword,
                Phone: phone,
                Age: age,
                Gender: gender
            });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
            console.log("user created sucessfully");
        }
    } catch (error) {
        console.log("error in creating user", error.message);
        res.status(409).send({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log("Email:", email);
        console.log("Password:", password);
        const existingUser = await userModel.findOne({ Email: email });

        if (!existingUser) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        console.log("Existing User:", existingUser);

        const isPasswordValid = await bcrypt.compare(password, existingUser.Password);
        console.log("Password valid:", isPasswordValid);

        if (!isPasswordValid) {
            return res.status(404).json({ message: 'Incorrect credentials' });
        }

        'default_jwt_secret'

        const token = jwt.sign(
            { email: existingUser.Email, userId: existingUser._id },
            'default_jwt_secret',
            { expiresIn: '3h' }
        );

        setAuthToken(token); // Set the token in Axios headers
        res.status(200).json({ token, user: existingUser });
        console.log("User logged in successfully");
    } catch (error) {
        console.log("Error logging in:", error.message);
        res.status(400).send({ message: error.message });
    }
};