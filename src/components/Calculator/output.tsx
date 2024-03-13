import React from 'react';
import { formatOperand } from '../../helpers/calculator';

interface PropTypes {
  previousOperand: string;
  currentOperand: string;
  operation: string;
}

const Output: React.FC<PropTypes> = React.memo(({ previousOperand, currentOperand, operation }) => {
  return (
    <div className="output">
      <div className="previous__operand">{formatOperand(previousOperand)}{" "}{operation}</div>
      <div className="current__operand">{formatOperand(currentOperand)}</div>
    </div>
  )
})
export default Output;