import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    Name : String,
    Email : String,
    Password : String,
    Phone : Number,
    Age : Number,
    Gender : String 
})

const userModel = mongoose.model('usermodel' ,UserSchema );
export default userModel;
