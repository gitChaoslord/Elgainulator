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
interface CalcUpdateSettings {
  type: typeof ACTIONS.UPDATE_SETTINGS;
  payload: {
    theme?: string;
    defaultValue?: number;
    beefUpValue?: number;
  };
}

interface CalcToggleSwitchMode {
  type: typeof ACTIONS.TOGGLE_SWITCH_MODE;
}

type UpdateKeypadConfigAction = {
  type: typeof ACTIONS.UPDATE_KEYPAD_CONFIG;
  payload: {
    newConfig: Array<{
      key: string;
      action: {
        type: string;
        payload?: {
          digit?: string;
        };
      };
    }>;
  };
};

export type CalcActionWithPayload = CalcAddDigit | CalcSelectOperation | CalcUpdateName | CalcSelectTheme
export type CalcActionWithoutPayload = CalcRemoveDigit | CalcActionPercent | CalcActionEval | CalcActionClear
export type CalcAction = CalcActionWithPayload | CalcActionWithoutPayload | CalcUpdateSettings | CalcToggleSwitchMode | UpdateKeypadConfigAction