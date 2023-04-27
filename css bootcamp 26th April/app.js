// npm install express mongoose bcrypt jsonwebtoken

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// user schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

//   Define the User model:
const User = mongoose.model('User', userSchema);

// Implement the login route:
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'my-secret-key');
  
    res.json({ token });
  });
//   registration route:
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
  
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create the user
    const user = new User({ email, password: hashedPassword });
    await user.save();
  
    res.json({ message: 'User created' });
  });
  