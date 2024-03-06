import { createContext } from "react";
import type { CalcAction } from "./types";

interface CalculatorInstance {
  id: string;
  name: string;
  theme?: string;
  currentOperand: string;
  previousOperand: string;
  operation: string;
  dispatch: React.Dispatch<CalcAction>;
}

const CalculatorContext = createContext<CalculatorInstance | null>(null);


export default CalculatorContext;