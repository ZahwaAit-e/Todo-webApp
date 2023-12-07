const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
require("./cnx/cnx");

const contactRoutes = require("./routes/contactRoutes");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);
// Use the contact route
app.use("/api/contact", contactRoutes);
app.listen(3000, () => {
  console.log("started");
});
