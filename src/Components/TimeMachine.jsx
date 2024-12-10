import React from 'react';

function TimeMachine({ selectEra }) {
  return (
    <div className="time-machine">
      <h2>Escolha sua era histórica</h2>
      <button onClick={() => selectEra("Idade Média")}>Idade Média</button>
      <button onClick={() => selectEra("Renascimento")}>Renascimento</button>
      <button onClick={() => selectEra("Antigo Egito")}>Antigo Egito</button>
    </div>
  );
}

export default TimeMachine;
