const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // Update with your frontend origin
  credentials: true, // Enable credentials (if needed)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
  allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions));
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
app.listen(1000, () => {
  console.log("started");
});
