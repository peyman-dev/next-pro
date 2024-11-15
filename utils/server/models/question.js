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
    answers: {
        type: Array,
        required: true,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

schema.virtual("answers", {
    ref: "Answer",
    localField: "_id",
    foreignField: "question"
})

const QuestionModel = mongoose.model.Question || mongoose.model("Question", schema);

export default QuestionModel