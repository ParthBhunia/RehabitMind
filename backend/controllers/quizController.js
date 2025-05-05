const QuizResponse = require('../models/quizResponseModel');

const submitQuiz = async (req, res) => {
  try {
    const { userId, answers } = req.body;
    const score = answers.reduce((a, b) => a + b, 0);

    const response = new QuizResponse({ userId, answers, score });
    await response.save();

    res.status(201).json({ message: 'Quiz submitted', score });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getUserResults = async (req, res) => {
  try {
    const { userId } = req.params;
    const responses = await QuizResponse.find({ userId }).sort({ createdAt: -1 });
    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { submitQuiz, getUserResults };
