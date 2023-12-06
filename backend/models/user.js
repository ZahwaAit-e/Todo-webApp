const mongoose = require("mongoose");
const usersch = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    list:[
        {
            type: mongoose.Types.ObjectId,
            ref: "List",
        },
    ],
    /*The code list:[ { type: mongoose.Types.ObjectId, ref: "list" } ] defines an array of objects that can reference documents in the list collection. Each object in the array has two properties:
    type: This property specifies the data type of the object's ID. In this case, the type is mongoose.Types.ObjectId, which means that the ID is a MongoDB ObjectID.
    ref: This property specifies the name of the collection that the ID references. In this case, the collection is called list.
*/    
    
});
module.exports = mongoose.model("User",usersch);