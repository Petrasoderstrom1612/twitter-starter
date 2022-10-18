import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Details from 'components/Details';
import NotFound from 'components/NotFound';
import Header from 'components/Header';
import List from 'components/List';
import { BASE_URL }

export const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<List list={pokemonList} />} />
        <Route path="/details/:pokemonName" element={<Details />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/NotFound" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
