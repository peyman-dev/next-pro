import mongoose from "mongoose"

export const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    shortName: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    image: {
        type: String,
        required: true,
    },
    followers: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
})

schema.virtual("questions", {
    ref: "Question",
    localField: "_id",
    foreignField: "language",
    justOne: false,
})

const LanguageModel = mongoose.models.Language || mongoose.model("Language", schema)

export default LanguageModel