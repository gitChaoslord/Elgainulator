import React from 'react';
import NewCalculator from './create';
import { useAppSelector } from '@store/index';
import Calculator from '.';
import { MAX_CALCULATORS } from '@constants/calculator';

const CalculatorGrid: React.FC = () => {
  const calculators = useAppSelector((state) => state.core.calculators);
  const selectedCalculator = useAppSelector((state) => state.core.selected);

  return (
    <div className="calculator__grid">
      {calculators.map((calc) => <Calculator
        {...calc}
        isSelected={selectedCalculator === calc.id}
        key={calc.id}
      />)}

      {calculators.length < MAX_CALCULATORS ? <NewCalculator /> : null}

    </div>
  )
}
export default CalculatorGrid;