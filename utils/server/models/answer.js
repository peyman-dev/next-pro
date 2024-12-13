import mongoose from "mongoose"

const Schema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    question: {
        type: mongoose.Types.ObjectId,
        ref: "Question",
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const AnswerModel = mongoose.models.Answer || mongoose.model("Answer", Schema);

export default AnswerModel;