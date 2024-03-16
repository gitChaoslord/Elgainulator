import { ACTIONS } from "./actions";
import type { CalcAction } from "./types";

type KeypadButtonAction = {
  type: string;
  payload?: {
    digit?: string;
    // Add other payload properties as needed
  };
};

type KeypadButton = {
  key: string;
  action: KeypadButtonAction;
  className?: string; // Make className optional
};

export const defaultValues = {
  operation: "",
  currentOperand: "",
  previousOperand: "",
  name: "New Calculator",
  theme: "default",
  defaultValue: 0,
  isSwitchModeActive: false,
  keypadConfig: [
    { key: "AC", className: "col-span-2", action: { type: ACTIONS.CLEAR } },
    { key: "DEL", action: { type: ACTIONS.REMOVE_DIGIT } },
    { key: "÷", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "÷" } } },
    { key: "07", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "7" } } },
    { key: "08", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "8" } } },
    { key: "09", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "9" } } },
    { key: "x", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "x" } } },
    { key: "04", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "4" } } },
    { key: "05", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "5" } } },
    { key: "06", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "6" } } },
    { key: "-", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "-" } } },
    { key: "01", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "1" } } },
    { key: "02", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "2" } } },
    { key: "03", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "3" } } },
    { key: "+", action: { type: ACTIONS.SELECT_OPERATION, payload: { operation: "+" } } },
    { key: "00", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "0" } } },
    { key: ".", action: { type: ACTIONS.ADD_DIGIT, payload: { digit: "." } } },
    { key: "=", className: "eval", action: { type: ACTIONS.EVALUATE } }
  ],
};


function evaluate({ currentOperand, previousOperand, operation }: typeof defaultValues): string {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if ((Number.isNaN(prev) || Number.isNaN(curr)) && operation !== "%") return "";

  let computedValue: number;


  switch (operation) {
    case "+":
      computedValue = prev + curr;
      break;
    case "-":
      computedValue = prev - curr;
      break;
    case "x":
      computedValue = prev * curr;
      break;
    case "÷":
      computedValue = prev / curr;
      break;
    case "%":
      computedValue = curr / 100;
      break;

    default:
      computedValue = 0;
      break;
  }

  return computedValue.toString()
}

export function reducer(state: typeof defaultValues, action: CalcAction): typeof defaultValues {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYPAD_CONFIG:
      return {
        ...state,
        keypadConfig: action.payload.newConfig,
      };
    case ACTIONS.TOGGLE_SWITCH_MODE:
      return {
        ...state,
        isSwitchModeActive: !state.isSwitchModeActive,
      };

    case ACTIONS.UPDATE_SETTINGS: {
      const { theme, defaultValue } = action.payload;
    
      const newState = { ...state };
      if (typeof theme === 'string') {
        newState.theme = theme;
      }
    
      if (typeof defaultValue === 'number') {
        newState.defaultValue = defaultValue;
      }
    
      return newState;
    }

    case ACTIONS.ADD_DIGIT:
      // check overwrite
      if (action.payload.digit === "0" && state.currentOperand === "0") return state;
      if (action.payload.digit === "." && state.currentOperand.includes(".")) return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand}${action.payload.digit}`
      }

    case ACTIONS.REMOVE_DIGIT:
      // check overwrite

      if (state.currentOperand === "") return state;
      if (state.currentOperand.length === 1) return {
        ...state,
        currentOperand: ""
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand.slice(0, -1)}`,
      }

      case ACTIONS.CLEAR:
        return {
          ...state,
          currentOperand: state.defaultValue.toString(), // Reset to the default value
          // Also reset any other parts of the state as needed, e.g., previousOperand, operation
          previousOperand: "",
          operation: " ",
        };

    case ACTIONS.SELECT_OPERATION:
      if (state.currentOperand === "" && state.previousOperand === "") return state;

      if (state.currentOperand === "") {
        return {
          ...state,
          operation: action.payload.operation
        }
      }

      if (state.previousOperand === "") {
        return {
          ...state,
          operation: action.payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: ""
        }
      }

      return {
        ...state,
        operation: action.payload.operation,
        previousOperand: evaluate(state),
        currentOperand: ""
      }

    // case ACTIONS.PERCENT:
    //   return {
    //     ...state,
    //     operation: "",
    //     previousOperand: "",
    //     currentOperand: evaluate({ ...state, operation: "%" }),
    //   }

    case ACTIONS.EVALUATE:
      if (state.operation === "" || state.currentOperand === "" || state.previousOperand === "") return state;

      return {
        ...state,
        // overwrite
        previousOperand: "",
        operation: "",
        currentOperand: evaluate(state)
      }

    case ACTIONS.UPDATE_NAME:
      return {
        ...state,
        name: action.payload.value
      }

    case ACTIONS.SELECT_THEME:
      return state

    default:
      return state
  }
}
