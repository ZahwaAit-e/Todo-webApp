const mongoose = require("mongoose");
const cnx = async(req,res) =>{
try {
    await mongoose.connect("mongodb+srv://nur:12345NUR@cluster0.po1zw9u.mongodb.net/node-auth")
.then(() => {
    console.log("connected");});
} catch (error) {
    res.status(400).json({message: "not connected"});
}
};
cnx();