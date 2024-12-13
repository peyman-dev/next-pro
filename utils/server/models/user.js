import mongoose from "mongoose";
import FollowModel from "./follow";

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    role: {
        type: String,
        enum: ["ADMIN", "USER", "SUPPORT", "AUTHOR", "FOUNDER", "MANAGER"],
        default: "USER"
    },
    description: {
        type: String,
        default: "چیزی ثبت نشده است."
    },
    job: {
        type: String,
        default: "چیزی ثبت نشده است."
    },
    company: {
        type: String,
        default: "چیزی اضافه نشده است."
    },
    followers: {
        type: Array,
    },
    followedLanguages: {
        type: mongoose.Types.ObjectId,
        ref: "Language"
    },
 
})

schema.virtual("followings", {
    ref: "Follow",           // Refers to the Follow model
    localField: "_id",       // The local field in User model
    foreignField: "user"     // The foreign field in Follow model
});



const UserModel = mongoose.models.User || mongoose.model("User", schema);

export default UserModel;