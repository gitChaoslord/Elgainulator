import React from 'react'
import CalculatorContext from './context';
import KeyPad from './keypad';
import Output from './output';
import { defaultValues, reducer } from './reducer';
import Toolbar from './toolbar';


interface PropTypes {
  name: string;
  id: string;
  theme?: string;
  onDelete: (id: string) => void;
}

const Calculator: React.FC<PropTypes> = ({ id, name, theme, onDelete }) => {

  const [{ currentOperand, previousOperand, operation }, dispatch] = React.useReducer(reducer, defaultValues)

  return (
    <CalculatorContext.Provider value={{ id, name, theme, currentOperand, previousOperand, operation, dispatch }}>
      <div className="calculator">
        <Toolbar onDelete={onDelete} />
        <Output />
        <KeyPad />
      </div>
    </CalculatorContext.Provider>
  )
}
export default Calculator;