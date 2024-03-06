import LanguageSwitch from '@components/Language';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-red-900 py-2 px-4 flex">
      <h1>Elgainulator 3000</h1>
      <div className="ml-auto">
        <LanguageSwitch />
      </div>
    </header>
  )
}
export default Navbar;