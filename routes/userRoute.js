const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Get all users
router.get("/users", getAllUser);

// Get a specific user by ID
router.get("/users/:userId", getUser);

// Create a new user
router.post("/users", createUser);

// Update an existing user
router.put("/users/:userId", updateUser);

// Delete an existing user
router.delete("/users/:userId", deleteUser);

module.exports = router;
