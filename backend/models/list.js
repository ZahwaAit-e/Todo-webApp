const mongoose = require("mongoose");
const listsch = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    descreption: {
        type: String,
        required: true,
    },
    week: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    mrdetails: {
        type: String,
        required: false,
    },
    user:[
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    ],
});
module.exports = mongoose.model("List",listsch);