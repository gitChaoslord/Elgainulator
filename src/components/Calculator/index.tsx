import React from 'react';
import CalculatorContext from './context';
import KeyPad from './keypad';
import Output from './output';
import { defaultValues, reducer } from './reducer';
import Toolbar from './toolbar';

interface PropTypes {
  id: string;
  onDelete: (id: string) => void;
}

const Calculator: React.FC<PropTypes> = ({ id, onDelete }) => {
  const [{ currentOperand, previousOperand, operation, theme, name }, dispatch] = React.useReducer(reducer, defaultValues)

  return (
    <CalculatorContext.Provider value={{ id, name, theme, currentOperand, previousOperand, operation, dispatch }}>
      <div className="calculator" id={id}>
        <Toolbar onDelete={onDelete} />
        <Output />
        <KeyPad />
      </div>
    </CalculatorContext.Provider>
  )
}
export default Calculator;