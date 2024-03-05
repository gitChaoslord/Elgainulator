import React from 'react';
import { ACTIONS } from '../actions';
import { useCalculatorContext } from '../context';
import { CalcAction } from '../types';
import classNames from 'classnames';

const standardKeyPad: { key: string; className?: string; action: CalcAction }[] = [
  { key: "AC", className: "col-span-2", action: { type: ACTIONS.CLEAR } },
  { key: "DEL", action: { type: ACTIONS.REMOVE_DIGIT } },
  // { key: "%", action: { type: ACTIONS.PERCENT } },
  { key: "÷", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "÷" } } },
  { key: "7", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "7" } } },
  { key: "8", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "8" } } },
  { key: "9", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "9" } } },
  { key: "x", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "x" } } },
  { key: "4", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "4" } } },
  { key: "5", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "5" } } },
  { key: "6", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "6" } } },
  { key: "-", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "-" } } },
  { key: "1", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "1" } } },
  { key: "2", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "2" } } },
  { key: "3", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "3" } } },
  { key: "+", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "+" } } },
  { key: "0", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "0" } } },
  { key: ".", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "." } } },
  { key: "=", className: "eval", action: { type: ACTIONS.EVALUATE } }
];

interface PropTypes {
  type?: "standard"
}

const KeyPad: React.FC<PropTypes> = ({ type = "standard" }) => {
  const { dispatch } = useCalculatorContext();

  const handleKeyPress = (action: CalcAction) => dispatch(action);

  return <div className="keypad">
    {type === 'standard' && standardKeyPad.map(({ key, className, action }) => (
      <button key={key} className={classNames("key", className)} onClick={() => handleKeyPress(action)}>
        {key}
      </button>
    ))}
  </div>
}
export default KeyPad;