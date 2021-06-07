import React, { useState, useEffect } from 'react';

import './App.css';

import Card from "./component/Card/Card";
import Pagination from './component/Pagination/Pagination';

const App = () => {
  const [films, setFilms] = useState([]);
  const size = 20;
  let pages = 1;

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    const response = await fetch("http://localhost:3001/films");
    const data = await response.json();
    setFilms(data);
    pages = Math.floor(data.length / size) + pages;
  }

  return (
    <div className="App">
      <header className="Header">Spoiled Popcorn</header>
      <div className="Content">
        <div className="Films">
          {
            films.map((value, index) => {
              return (
                <Card key={index} film={value} />
              )
            })
          }
        </div>
        <Pagination pages={pages} />
        <footer className="Footer">Doppel[i]</footer>
      </div>
    </div>
  );
}

export default App;