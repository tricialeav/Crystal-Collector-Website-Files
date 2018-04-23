const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: false },
  mailingList: { type: Boolean, default: false },
  date: {type: String }
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
