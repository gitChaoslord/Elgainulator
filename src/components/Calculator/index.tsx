import React from 'react';
import Toolbar from '../Calculator/toolbar';
import Output from '../Calculator/output';
import KeyPad from '../Calculator/keypad';
import { Calculator as CalculatorType } from 'types/calculator';

const Calculator: React.FC<({
  id: string;
  isSelected: boolean;
} & CalculatorType)> = ({ name, id, type, previousOperand, currentOperand, operation, theme, isSelected }) => {
  return (
    <div className="calculator" data-theme={theme} data-selected={isSelected} id={id}>
      <Toolbar name={name} id={id} />
      <Output previousOperand={previousOperand} currentOperand={currentOperand} operation={operation} />
      <KeyPad type={type} id={id} />
    </div>)
}
export default Calculator;