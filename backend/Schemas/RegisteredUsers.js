const mongoose = require('mongoose');

const registeredUsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const RegisteredUsers = mongoose.model(
  'RegisteredUsers',
  registeredUsersSchema,
  'users'
);

module.exports = RegisteredUsers;
