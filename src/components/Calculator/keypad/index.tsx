import React from 'react';
import { ACTIONS } from '../actions';
import { useCalculatorContext } from '../context/useContext';
import { CalcAction } from '../types';
import classNames from 'classnames';
import "./index.css";

const standardKeyPad: { key: string; className?: string; action: CalcAction }[] = [
  { key: "AC", className: "action clear", action: { type: ACTIONS.CLEAR } },
  { key: "DEL", className: "action del", action: { type: ACTIONS.REMOVE_DIGIT } },
  // { key: "%" , className:"", action: { type: ACTIONS.PERCENT } },
  { key: "÷", className: "operation", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "÷" } } },
  { key: "7", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "7" } } },
  { key: "8", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "8" } } },
  { key: "9", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "9" } } },
  { key: "x", className: "operation", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "x" } } },
  { key: "4", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "4" } } },
  { key: "5", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "5" } } },
  { key: "6", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "6" } } },
  { key: "-", className: "operation", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "-" } } },
  { key: "1", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "1" } } },
  { key: "2", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "2" } } },
  { key: "3", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "3" } } },
  { key: "+", className: "operation", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "+" } } },
  { key: "0", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "0" } } },
  { key: ".", className: "digit", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "." } } },
  { key: "=", className: "action eval", action: { type: ACTIONS.EVALUATE } }
];

interface PropTypes {
  type?: "standard"
}

const KeyPad: React.FC<PropTypes> = ({ type = "standard" }) => {
  const { dispatch } = useCalculatorContext();

  const handleKeyPress = (action: CalcAction) => dispatch(action);

  return <div className="keypad">
    {type === 'standard' && standardKeyPad.map(({ key, className, action }) => (
      <button role="button" key={key} className={classNames("key", className)} onClick={() => handleKeyPress(action)}>
        {key}
      </button>
    ))}
  </div>
}
export default KeyPad;