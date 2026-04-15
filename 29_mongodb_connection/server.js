const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));
const User = mongoose.model("User", {
name: String
});
const saveData = async () => {
const user = new User({ name: "Aravind" });
await user.save();
console.log("Data saved");
const data = await User.find();
console.log("Data:", data);  };
saveData();