import Calculator from '@components/Calculator'
import React from 'react'
import { v4 } from "uuid";

const defaultValues = [{
  id: v4(),
  name: "Calculator 1",
  theme: "default",
}];

const maxCalculators = 15;

const App: React.FC = () => {
  const [calcs, setCalcs] = React.useState(defaultValues);

  const handleAddCalculator = () => {
    const newCalc = {
      id: v4(),
      name: "something",
      theme: "default"
    };
    setCalcs((prev) => [...prev, newCalc])
  };

  const handleDeleteCalculator = (id: string) => setCalcs((prev) => [...prev.filter((calc) => calc.id !== id)]);

  const handleNameUpdate = (id: string, name: string) => setCalcs((prev) => prev.map((calc) => calc.id === id ? { ...calc, name } : calc));

  return (
    <React.Fragment>
      <header className="bg-red-900 p-2">Elgainulator 3000</header>
      <main className="w-full px-4 py-2">
        <div className="calculator__grid">
          {calcs.map((calc) => <Calculator
            {...calc}
            onNameUpdate={handleNameUpdate}
            onDelete={handleDeleteCalculator}
            key={calc.id}
          />)}

          {calcs.length < maxCalculators ? <button className="calculator__new-btn" onClick={handleAddCalculator}>
            <div className="m-auto" >Add new computor</div>
          </button> : null}

        </div>
      </main>
    </React.Fragment>
  )
}

export default App
