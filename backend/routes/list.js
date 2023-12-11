const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");
const user = require("../models/user");
//creat task
router.post("/addtask", async (req, res) => {
  try {
    const { title, start, end, id } = req.body;
    const existuser = await User.findById(id);
    if (existuser) {
      const newList = new List({ title, start, end, user: existuser._id });
      await newList.save();
      existuser.list.push(newList._id); // Use newList._id instead of list._id
      await existuser.save();
      res.status(200).json({ list: newList });
    }
  } catch (error) {
    console.log(error);
  }
});
//update
router.put("/updatetask/:id", async (req, res) => {
  try {
    const { title, start, end, time, email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // Update the existing task instead of creating a new one
      await List.findOneAndUpdate(
        { _id: req.params.id },
        {
          title,
          start,
          end,
          time,
        }
      ); // hya li sgmt internal server err

      res.status(200).json({ message: "updated" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
//delete
router.delete("/deletetask/:userId/:taskId", async (req, res) => {
  try {
    const { userId, taskId } = req.params;

    // Assuming `list` is an array field in your User model
    const existingUser = await User.findByIdAndUpdate(userId, {
      $pull: { list: taskId },
    });

    if (existingUser) {
      // Update the existing task instead of creating a new one
      await List.findByIdAndDelete(taskId);
      res.status(200).json({ message: "deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//gettask
router.get("/gettask/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id });
  if (list.length !== 0) {
    res.status(200).json({ list: list });
  } else {
    res.status(200).json({ message: "notasks" });
  }
});

module.exports = router;
