import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        requried: true,
        unique: true,
    },
    fullName:{
        type: String,
        requried: true,
    },
    password:{
        type: String,
        requried: true,
        minLength: 6,
    },
    email:{
        type: String,
        requried: true,
        unique: true,
    },
    followers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            default: []
        }
    ],
    following:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            default: []
        }
    ],
    profileImg:{
        type: String,
        default: "",
    },
    coverImg:{
        type: String,
        default: "",
    },
    bio:{
        type: String,
        default:"",
    },
    link:{
        type: String,
        default:"",
    },
    likedPosts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            res:"Post",
            default:[]
        },
    ],
    isAdmin:{
        type: Boolean,
        default: false,
    }

}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;