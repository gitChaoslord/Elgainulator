import React from 'react';
import { useCalculatorContext } from '../context/useContext';
import { formatOperand } from '../../../helpers/format';
import "./index.css"

const Output: React.FC = () => {
  const { previousOperand, currentOperand, operation } = useCalculatorContext();

  return (
    <div className="output">
      <div className="previous__operand">{formatOperand(previousOperand)}{" "}<span className="operator">{operation}</span></div>
      <div className="current__operand">{formatOperand(currentOperand)}</div>
    </div>
  )
}
export default Output;