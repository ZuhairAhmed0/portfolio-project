const {
  createMessage,
  getMessages,
  deleteMessage,
} = require("../controller/messagesController");
const messageValidator = require("../middleware/messageValidator");

const router = require("express").Router();
router.route("/").get(getMessages).post(messageValidator(), createMessage);
router.delete("/:id", deleteMessage);

module.exports = router;
