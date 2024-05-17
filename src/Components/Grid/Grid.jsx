import React from "react";
import "./Grid.css";

function Grid({ gifs, favorites, toggleFavorite }) {
  return (
    <div>
      <h2>Resultados</h2>
      <div className="grid-container">
        {gifs.map((gif) => (
          <div className="grid-item" key={gif.id}>
            <div className="content">
              <div className="image-container">
                <img src={gif.images.fixed_height.url} alt={gif.title} />
              </div>
              <div className="info">
                <h3>{gif.title}</h3>
                <button onClick={() => toggleFavorite(gif)}>
                  <img
                    src={
                      favorites.some((fav) => fav.id === gif.id)
                        ? "https://cdn-icons-png.flaticon.com/512/833/833472.png"
                        : "https://cdn-icons-png.flaticon.com/512/833/833300.png"
                    }
                    alt="favorite-icon"
                    width="16"
                    height="16"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Favoritos</h2>
      <div className="grid-container">
        {favorites.map((gif) => (
          <div className="grid-item" key={gif.id}>
            <div className="content">
              <div className="image-container">
                <img src={gif.images.fixed_height.url} alt={gif.title} />
              </div>
              <div className="info">
                <h3>{gif.title}</h3>
                <button onClick={() => toggleFavorite(gif)}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                    alt="favorite-icon"
                    width="16"
                    height="16"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
