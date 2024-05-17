// App.jsx

import React, { useState, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";
import Grid from "./Grid/Grid"; // Importa el componente Grid
import Form from "./SearchForm/Form"; // Importa el componente Form

function App() {
  const [gifs, setGifs] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=e2Vk89aiXgUq3KXMTb2vKP0dL9eDHlfC&q=${query}&limit=20`;
    const response = await fetch(url);
    const data = await response.json();
    setGifs(data.data);
  };

  const debouncedGetGifs = useCallback(
    debounce((query) => {
      getGifs(query);
    }, 500),
    []
  );

  useEffect(() => {
    if (searchQuery) {
      debouncedGetGifs(searchQuery);
    } else {
      setGifs([]); // Vacia el array de GIFs si el input está vacío
    }
  }, [searchQuery, debouncedGetGifs]);

  useEffect(() => {
    if (submittedQuery) {
      getGifs(submittedQuery);
    }
  }, [submittedQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedQuery(searchQuery);
  };

  const toggleFavorite = (gif) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === gif.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== gif.id);
    } else {
      updatedFavorites = [...favorites, gif];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Buscar GIFs</h1>
      <Form
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {searchQuery && (
        <p>
          {gifs.length} resultados para la palabra "{searchQuery}"
        </p>
      )}
      <Grid gifs={gifs} favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;
