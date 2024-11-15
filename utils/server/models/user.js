import mongoose from "mongoose";

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
    }
})

const UserModel = mongoose.models.User || mongoose.model("User", schema);

export default UserModel;