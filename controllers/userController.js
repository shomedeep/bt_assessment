const { v4: uuidv4 } = require("uuid");
const Validator = require("fastest-validator");

// In-memory database
let users = [];

// Get all users
const getAllUser = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "User list fetched successfully",
      users: users,
      count: users.length,
    });
  } catch (err) {
    const error = new Error("Internal Server Error", err);
    error.status = 500;
    next(error);
  }
};

// Get a specific user by ID
const getUser = async (req, res) => {
  try {
    const user = users.find((user) => user.id === req.params.userId);

    if (user && Object.keys(user).length) {
      res.status(200).json({
        message: "User fetched successfully",
        user: user,
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    const error = new Error("Internal Server Error", err);
    error.status = 500;
    next(error);
  }
};

// Create a new user
const createUser = async (req, res, next) => {
  try {
    const { username, age, hobbies } = req.body;

    const scehma = {
      username: { type: "string", optional: false, max: "100" },
      age: { type: "number", optional: false },
      hobbies: { type: "array", optional: false },
    };

    const objClass = new Validator();
    const validationResponse = objClass.validate(
      { username, age, hobbies },
      scehma
    );
    if (validationResponse !== true) {
      res
        .status(400)
        .json({ message: "Validation failed", error: validationResponse });
    }

    const newUser = {
      id: uuidv4(),
      username,
      age,
      hobbies: hobbies || [],
    };

    users.push(newUser);
    res.status(201).json({ message: "New user careated", user: newUser });
  } catch (err) {
    const error = new Error("Internal Server Error", err);
    error.status = 500;
    next(error);
  }
};

// Update an existing user
const updateUser = async (req, res, next) => {
  try {
    const { username, age, hobbies } = req.body;

    const scehma = {
      username: { type: "string", optional: false, max: "100" },
      age: { type: "number", optional: false },
      hobbies: { type: "array", optional: false },
    };

    const objClass = new Validator();
    const validationResponse = objClass.validate(
      { username, age, hobbies },
      scehma
    );
    if (validationResponse !== true) {
      res
        .status(400)
        .json({ message: "Validation failed", error: validationResponse });
    }

    const user = users.find((user) => user.id === req.params.userId);

    if (user) {
      user.username = username || user.username;
      user.age = age || user.age;
      user.hobbies = hobbies || user.hobbies;

      res.json({ message: "Item updated successfully", updatedUser: user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    const error = new Error("Internal Server Error", err);
    error.status = 500;
    next(error);
  }
};

// Delete an existing user
const deleteUser = async (req, res, next) => {
  try {
    const userIndex = users.findIndex((user) => user.id === req.params.userId);

    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    const error = new Error("Internal Server Error", err);
    error.status = 500;
    next(error);
  }
};

module.exports = {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
