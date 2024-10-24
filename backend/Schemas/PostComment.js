const mongoose = require('mongoose');

const postComment = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model('Comment', postComment);

module.exports = Comment;
