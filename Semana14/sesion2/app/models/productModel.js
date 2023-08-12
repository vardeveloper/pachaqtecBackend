const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        description: {
            type: String,
        },
        price: {
            type: mongoose.Types.Decimal128,
            require: true
        },
        stock: {
            type: Number,
            min: 0,
            max: 1000,
            require: true
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

/**
 * Implementar metodo propio de relacion a storage
 */


ProductSchema.statics.findOneData = function (id) {
    //return this.products.find({ name: new RegExp("i") })

    const joinData = this.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(id),
            },
        },
        {
            $lookup: {
                from: "storages",
                localField: "mediaId",
                foreignField: "_id",
                as: "image",
            }
        }
    ])
    return joinData
}

module.exports = mongoose.model("products", ProductSchema)
