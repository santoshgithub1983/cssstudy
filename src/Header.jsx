import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="header"> {/* Apply the class from CSS file */}
      <img src="./src/assets/UBS-Logo.wine.svg" alt="Logo" className="header-logo" />
      <h1 className="header-title">MyApp Ai Assist</h1>
    </header>
  );
}

export default Header;
