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
    return defaultValues
  }
}

const CalculatorProvider: React.FC<PropTypes> = ({ id, children }) => {
  const [state, dispatch] = React.useReducer(reducer, getInitialState(id));

  React.useEffect(() => {
    localStorage.setItem(id, JSON.stringify(state));
  }, [id, state]);

  React.useEffect(() => {
    return () => {
      localStorage.removeItem(id);
    }
  }, [id]);

  return (
    <CalculatorContext.Provider value={{ ...state,id ,dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
}
export default CalculatorProvider;