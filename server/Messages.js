const mongoose = require("mongoose");

const MessagesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Messages = mongoose.model("message", MessagesSchema);

module.exports = Messages;
