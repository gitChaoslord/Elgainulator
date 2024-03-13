export interface Calculator {
  // id: string;
  name: string;
  theme: string;
  currentOperand: string;
  previousOperand: string;
  operation: string;
  type: CalculatorTypes;
}

export type CalculatorTypes = "standard" | "scientific";