import React, { useState } from 'react';

function EraComponent({ era, task, options, completeTask }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanation, setExplanation] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setExplanation(option.explanation);
    setShowExplanation(true);
  };

  return (
    <div className="era-container">
      <h2>Tarefa da era do {era}</h2>
      <p>{task}</p>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="option-button"
          >
            {option.choice}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="explanation">
          <h3>Explicação:</h3>
          <p>{explanation}</p>
          <button onClick={completeTask}>Finalizar Tarefa</button>
        </div>
      )}
    </div>
  );
}

export default EraComponent;
