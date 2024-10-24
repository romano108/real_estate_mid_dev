const express = require('express');
const mongoose = require('mongoose');
const User = require('./Schemas/User.js');
const HouseImage = require('./Schemas/House.js');
const RegisteredUsers = require('./Schemas/RegisteredUsers');
const Comment = require('./Schemas/PostComment.js');

const app = express();
const mongoURI = 'mongodb://localhost:27017/real-estate';

app.use(express.json());

mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.post('/log-in', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error creating user', error: error.message });
  }
});

app.post('/comment', async (req, res) => {
  const { comment } = req.body;

  try {
    const newComment = new Comment({
      comment,
    });

    await newComment.save();
    res
      .status(201)
      .json({ message: 'Comment created successfully', user: newComment });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error creating comment', error: error.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const UsersRegistered = await RegisteredUsers.find();
    res.status(200).json(UsersRegistered);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error retrieving house images', error: error.message });
  }
});

app.get('/house-images', async (req, res) => {
  try {
    const houseImages = await HouseImage.find();
    res.status(200).json(houseImages);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error retrieving house images', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
