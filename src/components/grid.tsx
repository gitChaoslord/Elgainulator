import Calculator from '@components/Calculator';
import React from 'react';
import { v4 } from "uuid";
import NewCalculator from './newCalc';

const defaultValues = [{
  id: v4(),
  name: "Calculator 1",
  theme: "default",
}];

const maxCalculators = 15;

const CalculatorGrid: React.FC = () => {
  const [calcs, setCalcs] = React.useState(defaultValues);


  const handleAddCalculator = () => {
    const newCalc = {
      id: v4(),
      name: "something",
      theme: "default"
    };
    setCalcs((prev) => [...prev, newCalc]);
  };

  const handleDeleteCalculator = (id: string) => setCalcs((prev) => [...prev.filter((calc) => calc.id !== id)]);

  const handleNameUpdate = (id: string, name: string) => setCalcs((prev) => prev.map((calc) => calc.id === id ? { ...calc, name } : calc));

  return (
    <div className="calculator__grid">
      {calcs.map((calc) => <Calculator
        {...calc}
        onNameUpdate={handleNameUpdate}
        onDelete={handleDeleteCalculator}
        key={calc.id}
      />)}

      {calcs.length < maxCalculators ? <NewCalculator onClick={handleAddCalculator} /> : null}

    </div>
  )
}
export default CalculatorGrid;