import { useContext } from "react";
import CalculatorContext from "../context";

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error("Component not inside a calculator context")
  }
  return context;
}
