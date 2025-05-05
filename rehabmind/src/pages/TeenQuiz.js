import React, { useState } from "react";
import "./TeenQuiz.css";

const questions = [
  "Do you prefer doing things the same way every time?",
  "Is it hard to make eye contact during conversations?",
  "Do loud sounds (like alarms or fireworks) bother you more than others?",
  "Do you often talk about your favorite topic repeatedly?",
  "Does a change in your daily routine bother you?",
  "Do you find it hard to understand jokes or sarcasm?",
  "Do you notice details that others usually miss?",
  "Do you feel more comfortable being alone than in groups?",
  "Do you take things literally and miss hidden meanings?",
  "Do you have habits like pacing, flapping hands, or tapping when excited?"
];

const emojiScale = [
  { label: "Yes", emoji: "😊" },
  { label: "Sometimes", emoji: "😐" },
  { label: "No", emoji: "☹" }
];

const TeenQuiz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (index, value) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(answers).length !== questions.length) {
      alert("Please answer all the questions!");
      return;
    }

    let calculatedScore = 0;
    Object.values(answers).forEach((val) => {
      if (val === "Yes") calculatedScore += 1;
      else if (val === "Sometimes") calculatedScore += 0.5;
    });

    setScore(calculatedScore);
    setSubmitted(true);
  };

  return (
    <div className="teen-quiz-container">
      <h1>🧠 Autism Screening for Teens</h1>
      <form className="quiz-form" onSubmit={handleSubmit}>
        {questions.map((q, idx) => (
          <div key={idx} className="question-block">
            <p className="question">{q}</p>
            <div className="emoji-options">
              {emojiScale.map((option, i) => (
                <label key={i} className="emoji-label">
                  <input
                    type="radio"
                    name={`question-${idx}`}
                    value={option.label}
                    onChange={() => handleChange(idx, option.label)}
                    required
                  />
                  <span role="img" aria-label={option.label}>
                    {option.emoji}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submitted && (
        <div className="result">
          <p>
            {score >= 6
              ? "📘 You may show signs of autistic traits. Please consider speaking with a healthcare provider for a professional evaluation."
              : "🌟 Your responses don't strongly suggest autistic traits. Still, if you have questions or concerns, it's okay to reach out to a professional."}
          </p>
          <p><strong>Total Score: {score}/10</strong></p>
        </div>
      )}

      <p className="disclaimer">
        This is just a screening quiz. For a real diagnosis, please talk to a doctor. 🩺
      </p>
    </div>
  );
};

export default TeenQuiz;
