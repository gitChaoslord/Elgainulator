import { MAX_CALCULATORS } from "@constants/calculator";
import { evaluate } from "@helpers/calculator";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CalculatorTypes } from "types/calculator";
import type { CoreState } from "types/core";
import { v4 } from "uuid";

// const defaultCalculatorValues = {
//   name: "Calculator 1",
//   theme: "default",
//   currentOperand: "",
//   previousOperand: "",
//   operation: "",
//   hasFocus: false,
//   type: "standard"
// }
const initialSelection = v4();

const initialState: CoreState = {
  selected: initialSelection,
  calculators: [{
    id: initialSelection,
    name: "Calculator 1",
    theme: "default",
    currentOperand: "",
    previousOperand: "",
    operation: "",
    type: "standard"
  }]
}

const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    createCalculator: (state) => {
      if (state.calculators.length >= MAX_CALCULATORS) return state;
      state.calculators.push({
        id: v4(), name: "TODO: create name generating function",
        theme: "default",
        currentOperand: "",
        previousOperand: "",
        operation: "",
        type: "standard"
      })
    },
    destroyCalculator: (state, action: PayloadAction<string>) => {
      state.calculators = state.calculators.filter((calc) => calc.id !== action.payload);
    },
    renameCalculator: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const item = state.calculators.find((calc) => calc.id === action.payload.id);
      if (item) {
        item.name = action.payload.name;
      }
    },
    selectCalculatorTheme: (state, action: PayloadAction<{ id: string; theme: string }>) => {
      const item = state.calculators.find((calc) => calc.id === action.payload.id);
      if (item) {
        item.name = action.payload.theme;
      }
    },
    selectCalculatorType: (state, action: PayloadAction<{ id: string; type: CalculatorTypes }>) => {
      const item = state.calculators.find((calc) => calc.id === action.payload.id);
      if (item) {
        item.name = action.payload.type;
      }
    },
    addDigit: (state, action: PayloadAction<{ id: string; digit: string }>) => {
      const item = state.calculators.find((calc) => calc.id === action.payload.id);
      if (item) {
        if (action.payload.digit === "0" && item.currentOperand === "0") return state;
        if (action.payload.digit === "." && item.currentOperand.includes(".")) return state;
        item.currentOperand += action.payload.digit;
      }
    },
    removeDigit: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.calculators.find((calc) => calc.id === action.payload.id);
      if (item) {
        if (item.currentOperand === "") return state;
        if (item.currentOperand.length === 1) {
          item.currentOperand = "";
          return state;
        }
        item.currentOperand = item.currentOperand.slice(0, -1)
      }
    },
    selectOperation: (state, action: PayloadAction<{ id: string; operation: string; }>) => {
      const item = state.calculators.find((calc) => calc.id === action.payload.id);
      if (item) {
        if (item.currentOperand === "" && item.previousOperand === "") return state;
        if (item.currentOperand === "") {
          item.operation = action.payload.operation;
          return state;
        }
        if (item.previousOperand === "") {
          item.operation = action.payload.operation;
          item.previousOperand = item.currentOperand;
          item.currentOperand = "";
          return state;
        }
        item.operation = action.payload.operation;
        item.previousOperand = evaluate({
          currentOperand: item.currentOperand,
          previousOperand: item.previousOperand,
          operation: item.operation
        })
        item.currentOperand = ""
      }
    },
    clearCalculator: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.calculators.find((calc) => calc.id === action.payload.id);
      if (item) {
        item.operation = "";
        item.currentOperand = "";
        item.previousOperand = "";
      }
    },
    evalulateCalculator: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.calculators.find((calc) => calc.id === action.payload.id);
      if (item) {
        item.currentOperand = evaluate({
          currentOperand: item.currentOperand,
          previousOperand: item.previousOperand,
          operation: item.operation
        })
        item.previousOperand = "";
        item.operation = "";
      }
    }
  }
})

export const {
  createCalculator,
  renameCalculator,
  selectCalculatorTheme,
  selectCalculatorType,
  destroyCalculator,
  addDigit,
  removeDigit,
  selectOperation,
  clearCalculator,
  evalulateCalculator
} = coreSlice.actions;
export default coreSlice.reducer;