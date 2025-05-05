const mongoose = require('mongoose');

const quizResponseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: [Number],
  score: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('QuizResponse', quizResponseSchema);
