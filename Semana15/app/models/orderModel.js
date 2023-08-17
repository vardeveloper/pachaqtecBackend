const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
    {
        dateOrder: {
            type: Date,
            require: true,
        },
        state: {
            type: String,
        },
        total: {
            type: mongoose.Types.Decimal128,
            require: true,
        },
        customerId: {
            type: mongoose.Types.ObjectId,
        },
        products: {
            type: Array,
            require: true
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("orders", OrderSchema);
