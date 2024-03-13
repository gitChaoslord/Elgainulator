import classNames from 'classnames';
import React from 'react';
import { CalculatorTypes } from 'types/calculator';
import { standardKeyPad } from './standard';
import { useAppDispatch } from '@store/index';
import { CalcAction } from './types';

interface PropTypes {
  id: string;
  type: CalculatorTypes;
}

const KeyPad: React.FC<PropTypes> = ({ type = "standard", id }) => {
  const dispatch = useAppDispatch();

  const handleKeyPress = (action: CalcAction) => dispatch({ type: action.type, payload: { id, ...action.payload } });

  return <div className="keypad">
    {type === 'standard' && standardKeyPad.map(({ key, className, action }) => (
      <button key={key} className={classNames("key", className)} onClick={() => handleKeyPress(action)}>
        {key}
      </button>
    ))}
    {type === 'scientific' && <div>N/A</div>}
  </div>
}
export default KeyPad;