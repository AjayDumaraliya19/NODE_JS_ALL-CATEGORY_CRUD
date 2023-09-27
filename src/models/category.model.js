const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        trime: true,
    },
    category_dis: {
        type: String,
        trim: true,
    },
    is_active: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
    varsionKey: false,
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;