const mongoose = require("mongoose")

const File = new mongoose.Schema({
  downloadpath: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  passcode: String,
  downloadFilesCount: {
    type: Number,
    required: true,
    default: 0,
  },
})

module.exports = mongoose.model("File", File)
