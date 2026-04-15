const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();
const upload = multer();
mongoose.connect("mongodb://localhost:27017/test");
const Img = mongoose.model("Img", {
    data: Buffer,
    type: String
});
app.post("/upload", upload.single("img"), async (req, res) => {
    await new Img({
        data: req.file.buffer,
        type: req.file.mimetype
    }).save();
    res.send("Image Uploaded");
});
app.listen(3000, () => console.log("Server running"));