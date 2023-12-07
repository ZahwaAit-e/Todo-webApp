const mongoose = require("mongoose");
const Contact = mongoose.model("Contact", {
  name: String,
  email: String,
  message: String,
});
module.exports = Contact;
