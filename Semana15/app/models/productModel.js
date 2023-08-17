const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
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
        description: {
            type: String,
        },
        price: {
            type: mongoose.Types.Decimal128,
            require: true,
        },
        stock: {
            type: Number,
            min: 0,
            max: 1000,
            require: true,
        },
        categoryId: {
            type: mongoose.Types.ObjectId,
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

ProductSchema.statics.findOneData = function (id) {
    return this.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(id),
            }
        },
        {
            $lookup: {
                from: "storages",
                localField: "mediaId",
                foreignField: "_id",
                as: "photo"
            }
        }
    ])
}

ProductSchema.statics.findAllData = function () {
    return this.aggregate([
        {
            $lookup: {
                from: "storages",
                localField: "mediaId",
                foreignField: "_id",
                as: "photo"
            }
        }
    ])
}

module.exports = mongoose.model("products", ProductSchema);
