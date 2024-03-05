import { createContext, useContext } from "react";
import type { CalcAction } from "./types";

interface CalculatorInstance {
  id: string;
  name: string;
  theme?: string;
  currentOperand: string;
  previousOperand: string;
  operation: string;
  dispatch: (action: CalcAction) => void;
}

const CalculatorContext = createContext<CalculatorInstance | null>(null);

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error("Component not inside a calculator context")
  }
  return context;
}


export default CalculatorContext;