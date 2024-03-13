export function evaluate({ currentOperand, previousOperand, operation }: Record<string, string>): string {
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

const intFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0
})

export const formatOperand = (operand: string) => {
  if (operand === "") return "";
  const [int, dec] = operand.split(".");
  if (!dec) return intFormatter.format(Number(int));
  return `${intFormatter.format(Number(int))}.${dec}`
}