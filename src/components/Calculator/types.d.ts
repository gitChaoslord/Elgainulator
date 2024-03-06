import { ACTIONS } from "./actions"

interface CalcAddDigit {
  type: typeof ACTIONS.ADD_DIGIT;
  payload: {
    digit: string;
  };
}

interface CalcRemoveDigit {
  type: typeof ACTIONS.REMOVE_DIGIT;
}

interface CalcSelectOperation {
  type: typeof ACTIONS.SELECT_OPERATION;
  payload: {
    operation: string;
  };
}

interface CalcActionPercent {
  type: typeof ACTIONS.PERCENT;
}

interface CalcActionEval {
  type: typeof ACTIONS.EVALUATE;
}

interface CalcActionClear {
  type: typeof ACTIONS.CLEAR;
}

export type CalcActionWithPayload = CalcAddDigit | CalcSelectOperation
export type CalcActionWithoutPayload = CalcRemoveDigit | CalcActionPercent | CalcActionEval | CalcActionClear
export type CalcAction = CalcActionWithPayload | CalcActionWithoutPayload