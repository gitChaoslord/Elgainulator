import { ACTIONS } from "./actions";
import type { CalcAction } from "./types";

export const defaultValues = {
  operation: "",
  currentOperand: "",
  previousOperand: "",
  name: "New Calculator",
  theme: "default",
  defaultValue: 0
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
