import LanguageSwitch from '@components/Language';
import React from 'react';
import "./index.css";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <h1 className="navbar__title">Elgainulator 3000</h1>
      <span className="my-auto mx-2">{"Version: "}{import.meta.env.PACKAGE_VERSION}</span>
      <div className="navbar__actions">
        <LanguageSwitch />
      </div>
    </header>
  )
}
export default Navbar;