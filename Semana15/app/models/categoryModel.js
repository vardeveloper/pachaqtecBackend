const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true,
        },
        slug: {
            type: String,
            require: true,
            unique: true,
        },
        active: {
            type: Boolean,
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("categories", CategorySchema);
