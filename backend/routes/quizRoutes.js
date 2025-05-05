const express = require('express');
const router = express.Router();
const { submitQuiz, getUserResults } = require('../controllers/quizController');

router.post('/submit', submitQuiz);
router.get('/results/:userId', getUserResults);

module.exports = router;
