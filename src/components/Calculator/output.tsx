import React from 'react';
import { useCalculatorContext } from './context/useContext';
import { formatOperand } from '../../helpers/format';


const Output: React.FC = () => {

  const { previousOperand, currentOperand, operation } = useCalculatorContext();

  return (
    <div className="output">
      <div className="previous__operand">{formatOperand(previousOperand)}{" "}{operation}</div>
      <div className="current__operand">{formatOperand(currentOperand)}</div>
    </div>
  )
}
export default Output;