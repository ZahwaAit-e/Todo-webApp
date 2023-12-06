const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");
const user = require("../models/user");
//creat task
router.post("/addtask", async(req,res)=>{
    try {
        const {title,descreption,week,date,time,mrdetails,email}= req.body;
    const existuser = await User.findOne({email});
   if (existuser) {
  const newList = new List({ title, descreption, week, date, time, mrdetails, user: existuser._id });
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
router.put("/updatetask/:id", async(req,res)=>{
    try {
        const { title, description, week, date, time, mrdetails, email } = req.body;
        const existingUser = await User.findOne({ email });
      
        if (existingUser) {
          // Update the existing task instead of creating a new one
          await List.findOneAndUpdate({ _id: req.params.id }, {
            title,
            description,
            week,
            date,
            time,
            mrdetails,
          }); // hya li sgmt internal server err 
          
          res.status(200).json({ message: "updated" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      
});
//delete
router.delete("/deletetask/:id", async(req,res)=>{
    try {
        const {  email } = req.body;
        const existingUser = await User.findOneAndUpdate({ email },{$pull:{list:req.params.id}});
      
        if (existingUser) {
          // Update the existing task instead of creating a new one
          await List.findOneAndDelete({ _id: req.params.id }).then(()=>res.status(200).json({ message: "deleted" }));
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
      
});
//gettask
router.get("/gettask/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id });
 if(list.length !==0){
  res.status(200).json({ list: list });
 }else{
  res.status(200).json({ "message":"notasks"});
 }
}); 

module.exports = router
