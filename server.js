require("dotenv").config()
const multer = require("multer")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const File = require("./models/File")

const express = require("express")
const app = express()
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const upload = multer({ dest: "uploads" })
const MONGODB_URI = "mongodb://localhost:27017/mydatabase";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/upload", upload.single("downloadpath"), async (req, res) => {
  console.log(req.file);
  const fileData = {
    downloadpath: req.file.path,
    Name: req.file.originalname,
  }
  console.log(fileData);
  if (req.body.passcode != null && req.body.passcode !== "") {
    fileData.passcode = await bcrypt.hash(req.body.passcode, 10)
  }

  const file = await File.create(fileData)

  res.render("index", { fileLink: `${req.headers.origin}/sharedfile/${file.id}` })
})

app.route("/sharedfile/:id").get(handleDownload).post(handleDownload)

async function handleDownload(req, res) {
  const file = await File.findById(req.params.id)

  if (file.passcode != null) {
    if (req.body.passcode == null) {
      res.render("passcode")
      return
    }
    if (!(await bcrypt.compare(req.body.passcode, file.passcode))) {
      res.render("passcode", { error: true })
      return
    }
  }

  file.downloadFilesCount++
  await file.save()
  console.log(file.downloadFilesCount)

  res.download(file.downloadpath, file.Name)
}

const PORT = process.env.PORT || 4000; // Default to port 3000 if PORT is not set
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
