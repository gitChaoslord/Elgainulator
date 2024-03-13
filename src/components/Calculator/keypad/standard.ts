import { addDigit, clearCalculator, evalulateCalculator, removeDigit, selectOperation } from '@store/features/core';
import type { CalcAction } from './types';

export const standardKeyPad: { key: string; className?: string; action: CalcAction }[] = [
  { key: "AC", className: "col-span-2", action: { type: clearCalculator.type } },
  { key: "DEL", action: { type: removeDigit.type } },
  // { key: "%", action: { type: ACTIONS.PERCENT } },
  { key: "÷", action: { type: selectOperation.type, payload: { operation: "÷" } } },
  { key: "7", action: { type: addDigit.type, payload: { digit: "7" } } },
  { key: "8", action: { type: addDigit.type, payload: { digit: "8" } } },
  { key: "9", action: { type: addDigit.type, payload: { digit: "9" } } },
  { key: "x", action: { type: selectOperation.type, payload: { operation: "x" } } },
  { key: "4", action: { type: addDigit.type, payload: { digit: "4" } } },
  { key: "5", action: { type: addDigit.type, payload: { digit: "5" } } },
  { key: "6", action: { type: addDigit.type, payload: { digit: "6" } } },
  { key: "-", action: { type: selectOperation.type, payload: { operation: "-" } } },
  { key: "1", action: { type: addDigit.type, payload: { digit: "1" } } },
  { key: "2", action: { type: addDigit.type, payload: { digit: "2" } } },
  { key: "3", action: { type: addDigit.type, payload: { digit: "3" } } },
  { key: "+", action: { type: selectOperation.type, payload: { operation: "+" } } },
  { key: "0", action: { type: addDigit.type, payload: { digit: "0" } } },
  { key: ".", action: { type: addDigit.type, payload: { digit: "." } } },
  { key: "=", className: "eval", action: { type: evalulateCalculator.type } }
];
