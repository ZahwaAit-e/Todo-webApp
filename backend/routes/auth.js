const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");
const bcrypt = require("bcrypt");

// Sign-up
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return; // Prevent further processing
    }

    // Generate a salt and hash the password with the salt
    const salt = bcrypt.genSaltSync(10);
    const hashpass = bcrypt.hashSync(password, salt);

    // Create a new user with the hashed password
    const user = new User({
      email,
      username,
      password: hashpass,
    });

    await user.save();

    res.status(200).json({ user: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
//login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(400).json({ message: "Sign up to access Tasky" });
      }
  
      
      const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
  
      if (!isPasswordCorrect) {
        res.status(400).json({ message: "Wrong password" });
      }
  
      const { password, ...others } = user._doc; // Destructure the user object
      res.status(200).json({ others }); // Send the user data without the password
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "user exists" });
    }
  });
  

module.exports = router;
