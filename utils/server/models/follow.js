import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        language: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Language",
            required: true,
        },
    },
    {
        timestamps: true, 
    }
);


const FollowModel = mongoose.models.Follow || mongoose.model("Follow", schema);

export default FollowModel;
