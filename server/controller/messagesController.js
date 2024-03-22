const { validationResult } = require("express-validator");
const Messages = require("../model/Messages");
async function createMessage(req, res) {
  try {
    const errors = validationResult(req);
    const error = errors.errors.map((error) => ({ [error.path]: error.msg }));

    if (!errors.isEmpty()) {
      return res.status(404).json({ message: "all fields is required", error });
    }

    const message = await Messages.create(req.body);

    if (!message)
      return res.status(404).json({ message: "Failed to send the message" });

    res.status(200).json({ message: "The Message has been sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getMessages(req, res) {
  try {
    const messages = await Messages.find();

    if (!messages)
      return res.status(404).json({ message: "messages not found" });

    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteMessage(req, res) {
  try {
    const { id } = req.params;
    const message = await Messages.findByIdAndDelete(id);
    if (!message) return res.status(404).json({ message: "message not found" });

    res.status(200).json({ message: "message has been  deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createMessage, getMessages, deleteMessage };
