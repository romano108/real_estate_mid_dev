const mongoose = require('mongoose');

const allComments = new mongoose.Schema({
  comment: String,
});

const UserComments = mongoose.model('UserComments', allComments, 'comments');

module.exports = UserComments;
