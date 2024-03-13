import Navbar from '@components/Navbar';
import CalculatorGrid from '@components/Calculator/grid';
import React from 'react';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <CalculatorGrid />
      </main>
    </React.Fragment>
  )
}
export default App