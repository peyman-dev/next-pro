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
})

const AnswerModel = mongoose.model.Answer || mongoose.model("Answer", Schema);

export default AnswerModel;