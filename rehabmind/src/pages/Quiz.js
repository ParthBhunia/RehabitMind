const questions = [
    {
      question: "How often do you feel stressed about school or college?",
      options: ["Never", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you find it difficult to concentrate on your studies or tasks?",
      options: ["Never", "Occasionally", "Frequently", "Almost always"],
    },
    {
      question: "How well do you sleep on an average school night?",
      options: [
        "Very well (7-8 hours, uninterrupted)",
        "Fairly well (6-7 hours, occasional waking)",
        "Poorly (4-6 hours, often waking)",
        "Very poorly (less than 4 hours, restless)",
      ],
    },
    // ... Add rest of the questions here
  ];
  
  function Quiz() {
    return (
      <div className="quiz-container">
        <h2>Mental Health Quiz</h2>
        <form className="quiz-form">
          {questions.map((q, index) => (
            <div className="quiz-question" key={index}>
              <p>{index + 1}. {q.question}</p>
              {q.options.map((option, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default Quiz;
  