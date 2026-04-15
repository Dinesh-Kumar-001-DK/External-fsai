const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/test");
const Msg = mongoose.model("Msg", {
name: String,
email: String,
message: String  });
app.post("/contact", async (req, res) => {
await new Msg(req.body).save();
res.send("Message Saved");  });
app.listen(3000, () => console.log("Server running"));