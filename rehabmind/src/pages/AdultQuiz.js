import React, { useState } from "react";
import "./AdultQuiz.css";

const questions = [
  "Do you often find it hard to maintain eye contact during conversations?",
  "Do you have difficulty understanding sarcasm or jokes?",
  "Do you prefer routines and get anxious with unexpected changes?",
  "Do you find it challenging to make small talk or engage in social conversations?",
  "Do you feel overwhelmed in busy, noisy environments?",
  "Do you find it difficult to understand others' feelings?",
  "Do you notice details that others may miss (like textures or small sounds)?",
  "Do you tend to take things literally or misunderstand common expressions?",
  "Do you prefer being alone over social gatherings?",
  "Do you engage in repetitive behaviors (like tapping, pacing, or hand movements)?"
];

const emojiScale = [
  { label: "Yes", emoji: "😊" },
  { label: "Sometimes", emoji: "😐" },
  { label: "No", emoji: "☹" }
];

const AdultQuiz = () => {
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
    <div className="adult-quiz-container">
      <h1>🧠 Autism Screening for Adults</h1>
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
              ? "📘 Your responses may reflect autistic traits. Please consider consulting a healthcare professional for a thorough evaluation."
              : "🌟 Your responses don't indicate strong autistic traits. If you still have concerns, speaking with a professional is a good idea."}
          </p>
          <p><strong>Total Score: {score}/10</strong></p>
        </div>
      )}

      <p className="disclaimer">
        This quiz is a self-screening tool, not a diagnosis. For proper assessment, please speak with a medical professional. 🩺
      </p>
    </div>
  );
};

export default AdultQuiz;
