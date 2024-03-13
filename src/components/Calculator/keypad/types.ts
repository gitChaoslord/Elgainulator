import { addDigit, removeDigit, selectOperation, clearCalculator, evalulateCalculator } from "@store/features/core";

interface CalcAddDigit {
  type: typeof addDigit.type;
  payload: {
    digit: string;
  };
}

interface CalcRemoveDigit {
  type: typeof removeDigit.type;
  payload?: undefined
}

interface CalcSelectOperation {
  type: typeof selectOperation.type;
  payload: {
    operation: string;
  };
}

interface CalcActionEval {
  type: typeof evalulateCalculator.type;
  payload?: undefined
}

interface CalcActionClear {
  type: typeof clearCalculator.type
  payload?: undefined
}

export type CalcActionWithPayload = CalcAddDigit | CalcSelectOperation;
export type CalcActionWithoutPayload = CalcRemoveDigit | CalcActionEval | CalcActionClear
export type CalcAction = CalcActionWithPayload | CalcActionWithoutPayload