const mongoose  = require('mongoose')
// const {Schema} = require('mongoose');
const PostSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
},{timestamps:true});
const Post = mongoose.model('post',PostSchema);
module.exports = Post;