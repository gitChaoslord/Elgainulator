import React from 'react';
import CalculatorContext from './context';
import { defaultValues, reducer } from './reducer';

interface PropTypes {
  id: string;
  children: React.ReactNode;
}

const getInitialState = (id: string): typeof defaultValues => {
  try {
    const items = localStorage.getItem(id);
    return items ? JSON.parse(items) : defaultValues;
  } catch (error) {
    console.error(error)
    return defaultValues
  }
}

const CalculatorProvider: React.FC<PropTypes> = ({ id, children }) => {
  const [{ name, theme, currentOperand, previousOperand, operation }, dispatch] = React.useReducer(reducer, getInitialState(id));

  React.useEffect(() => {
    localStorage.setItem(id, JSON.stringify({ name, theme, currentOperand, previousOperand, operation }));
  }, [id, name, theme, currentOperand, previousOperand, operation]);

  React.useEffect(() => {
    return () => {
      localStorage.removeItem(id)
    }
  }, [id])

  return (
    <CalculatorContext.Provider value={{ id, name, theme, currentOperand, previousOperand, operation, dispatch }}>
      <div className="calculator"
        data-theme={theme}
        id={id}
      >
        {children}
      </div>
    </CalculatorContext.Provider>
  )
}
export default CalculatorProvider;