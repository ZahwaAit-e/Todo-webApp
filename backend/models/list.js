const mongoose = require("mongoose");
const listsch = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    
    
    user:[
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    ],
});
module.exports = mongoose.model("List",listsch);