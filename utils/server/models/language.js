import mongoose from "mongoose";

const schema = mongoose.Schema({
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
    isVisible: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});


schema.virtual("questions", {
    ref: "Question",
    localField: "_id",
    foreignField: "language",
    justOne: false,
});

schema.virtual("followers", {
    ref: "Follow",
    localField: "_id",
    foreignField: "language",
    justOne: false,

});


const LanguageModel = mongoose.models.Language || mongoose.model("Language", schema);

export default LanguageModel;
