const {
  createMessage,
  getMessages,
  deleteMessage,
} = require("../controller/messagesController");
const isAuthenticated = require("../middleware/isAuthenticated");
const messageValidator = require("../middleware/messageValidator");

const router = require("express").Router();
router.route("/").get(isAuthenticated, getMessages).post(isAuthenticated, messageValidator(), createMessage);
router.delete("/:id", isAuthenticated, deleteMessage);

module.exports = router;
