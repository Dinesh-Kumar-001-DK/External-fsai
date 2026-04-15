const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/test");
const Student = mongoose.model("Student", {
name: String,
email: String,
course: String  });
app.post("/register", async (req, res) => {
await new Student(req.body).save();
res.send("Student Registered");  });
app.listen(3000, () => console.log("Server running"));