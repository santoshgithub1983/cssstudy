import React from 'react';
import Header from './Header';
import Main from './main';
import Footer from './Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header  />
      <Main  />
      <Footer  />
    </div>
  );
}

export default App;
