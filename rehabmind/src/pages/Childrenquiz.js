import React, { useState } from "react";
import "./Childrenquiz.css";

const questions = [
  "Do you like to do the same things over and over?",
  "Is it hard for you to look people in the eyes when talking?",
  "Do loud noises (like sirens or fireworks) bother you more than other kids?",
  "Do you like to talk about one favorite thing a lot?",
  "Do you get upset when your routine changes (e.g., a different breakfast)?",
  "Do you find it hard to tell when someone is joking?",
  "Do you notice small details (like a bug on the wall) that others miss?",
  "Do you prefer playing alone instead of with big groups of kids?",
  "Do you take things very literally (e.g., confused by “break a leg”)?",
  "Do you flap your hands, rock, or spin when excited?"
];

const emojiScale = [
  { label: "Yes", emoji: "😊" },
  { label: "Sometimes", emoji: "😐" },
  { label: "No", emoji: "☹" }
];

const ChildrenQuiz = () => {
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
    <div className="kids-quiz-container">
      <h1>🧸 Autism Screening for Kids</h1>
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
              ? "🧠 Your child may show signs of autistic traits. Please consider speaking to a healthcare provider for a full evaluation."
              : "🌟 Your child's responses don't indicate strong autistic traits. However, if you have concerns, a professional opinion is always helpful."}
          </p>
          <p><strong>Total Score: {score}/10</strong></p>
        </div>
      )}

      <p className="disclaimer">
        This quiz is just for screening. For proper diagnosis, talk to a doctor. 🩺
      </p>
    </div>
  );
};

export default ChildrenQuiz;
