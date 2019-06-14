const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/zypheruser',{useNewUrlParser:true});
var Schema=mongoose.Schema;

//schema for comment part
var CommentSchema=new Schema({
    from_user:String,
    to_user:String,
    comment:String,
    time:{type:Date,default:Date.now()}
});
//schema for the users
var userSchema=new Schema({
    name:String,
    email:String,
    phone_number:Number,
    address:String,
    interests:[],
    comments:[CommentSchema]
});
var User=mongoose.model('User',userSchema);
module.exports=User;

