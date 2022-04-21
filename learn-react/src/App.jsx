import './App.css';
import './assets/styling/styles.scss'
import React, { useState } from 'react';
import Home from './feature/day4/HomePage';
import About from './feature/day4/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="app demo-page">
        <header className="header-app">
          <div className="nav">
            <button onClick={(e) => handleChangePage("home")}>
              <b>Home Page</b>
            </button>
            <button onClick={(e) => handleChangePage("about")}>
              <b>About Page</b>
            </button>
          </div>
        </header>
        {(currentPage === "home") ? <Home /> : <About />}
      </div>
    </>
  );
}

export default App;
