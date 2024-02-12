const { v4: uuidv4 } = require("uuid");

// In-memory database
let users = [];

// Get all users
const getAllUser = async (req, res) => {
  res.json(users);
};

// Get a specific user by ID
const getUser = async (req, res) => {
  const user = users.find((user) => user.id === req.params.userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const { username, age, hobbies } = req.body;

  if (!username || !age) {
    res.status(400).json({ error: "Username and age are required" });
  } else {
    const newUser = {
      id: uuidv4(),
      username,
      age,
      hobbies: hobbies || [],
    };

    users.push(newUser);
    res.status(201).json(newUser);
  }
};

// Update an existing user
const updateUser = async (req, res) => {
  const { username, age, hobbies } = req.body;
  const user = users.find((user) => user.id === req.params.userId);

  if (user) {
    user.username = username || user.username;
    user.age = age || user.age;
    user.hobbies = hobbies || user.hobbies;

    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

// Delete an existing user
const deleteUser = async (req, res) => {
  const userIndex = users.findIndex((user) => user.id === req.params.userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "User not found" });
  }
};

module.exports = {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
