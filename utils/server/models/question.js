const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    bounty: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    language: {
        type: mongoose.Types.ObjectId,
        ref: "Language",
        required: true,
    },
    likes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

schema.virtual("responses", {
    ref: "Answer",
    localField: "_id",
    foreignField: "question"
})

const QuestionModel = mongoose.models.Question || mongoose.model("Question", schema);

export default QuestionModel