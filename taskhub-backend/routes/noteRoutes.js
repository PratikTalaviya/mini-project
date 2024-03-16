const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");
// const authMiddleware = require("../middleware/authMiddleware");

// Protected route - requires authentication
// router.use(authMiddleware.authenticateUser);

router.post("/:userId", noteController.createNote);
router.get("/:userId", noteController.getNotes);
router.get("/:id", noteController.getNoteById);
router.put("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;
