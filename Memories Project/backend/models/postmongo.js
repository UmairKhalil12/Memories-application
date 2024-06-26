import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    userId : String,
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likecount:{
        type:Number,
        default:0
    },
    createdat:{
        type:Date,
        default:Date.now
    }
})

const postModel = mongoose.model('postmongo',PostSchema);
export default postModel;
