const User = require('../models/userModel');

// Alphanumeric password with min 6 characters
const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: 'Password must be alphanumeric and at least 6 characters long',
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { registerUser, loginUser };
