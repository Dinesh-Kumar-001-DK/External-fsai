const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/test");
const User = mongoose.model("User", {
name: String,
age: String  });
app.post("/data", async (req, res) => {
await new User(req.body).save();
res.send("Saved to DB");  });
app.listen(3000, () => console.log("Server running"));