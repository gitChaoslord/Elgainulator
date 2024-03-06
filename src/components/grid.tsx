import Calculator from '@components/Calculator';
import React from 'react';
import { v4 } from "uuid";
import NewCalculator from './newCalc';
import Toolbar from './Calculator/toolbar';
import Output from './Calculator/output';
import KeyPad from './Calculator/keypad';

const defaultValues = [{
  id: v4(),
}];

const maxCalculators = 15;

const getInitialState = (): typeof defaultValues => {
  const items = localStorage.getItem('calculators')
  return items ? JSON.parse(items) : defaultValues;
}

const CalculatorGrid: React.FC = () => {
  const [calcs, setCalcs] = React.useState<typeof defaultValues>(getInitialState);

  const handleAddCalculator = () => {
    const newCalc = {
      id: v4(),
    };
    setCalcs((prev) => [...prev, newCalc]);
  };

  const handleDeleteCalculator = (id: string) => setCalcs((prev) => [...prev.filter((calc) => calc.id !== id)]);

  React.useEffect(() => {
    localStorage.setItem('calculators', JSON.stringify(calcs))
  }, [calcs])

  return (
    <div className="calculator__grid">
      {calcs.map((calc) => <Calculator
        id={calc.id}
        key={calc.id}
      >
        <div className="calculator" id={calc.id}>
          <Toolbar onDelete={handleDeleteCalculator} />
          <Output />
          <KeyPad />
        </div>
      </Calculator>)}

      {calcs.length < maxCalculators ? <NewCalculator onClick={handleAddCalculator} /> : null}

    </div>
  )
}
export default CalculatorGrid;