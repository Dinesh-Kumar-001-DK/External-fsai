const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/test");
const User = mongoose.model("User", { u: String, p: String });
app.post("/r", async (req, res) => {
await new User(req.body).save();
res.send("Registered");  });
app.post("/l", async (req, res) => {
const x = await User.findOne(req.body);
res.send(x ? "Success" : "Invalid");  });
app.listen(3000);