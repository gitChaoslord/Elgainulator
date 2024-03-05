const intFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0
})

export const formatOperand = (operand: string) => {
  if (operand === "") return "";
  const [int, dec] = operand.split(".");
  if (!dec) return intFormatter.format(Number(int));
  return `${intFormatter.format(Number(int))}.${dec}`
}