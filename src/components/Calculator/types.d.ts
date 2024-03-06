import { ACTIONS } from "./actions";

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

interface CalcUpdateName {
  type: typeof ACTIONS.UPDATE_NAME;
  payload: {
    value: string
  }
}

// TODO: update once more themes are dated
interface CalcSelectTheme {
  type: typeof ACTIONS.SELECT_THEME;
  payload: {
    value: "default"
  }
}

export type CalcActionWithPayload = CalcAddDigit | CalcSelectOperation | CalcUpdateName | CalcSelectTheme
export type CalcActionWithoutPayload = CalcRemoveDigit | CalcActionPercent | CalcActionEval | CalcActionClear
export type CalcAction = CalcActionWithPayload | CalcActionWithoutPayload