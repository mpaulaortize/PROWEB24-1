import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import CatButton from "../Button/Button";
import "./Card.css";

const Card = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [catFact, setCatFact] = useState("");
  const [catImage, setCatImage] = useState("");

  useEffect(() => {
    fetchCatData();
  }, []);

  const fetchCatData = () => {
    setIsLoading(true);
    setError(null);

    fetch("https://catfact.ninja/fact")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Theres no fact");
        }
        return response.json();
      })
      .then((data) => {
        setCatFact(data.fact);
        const firstFourWords = data.fact.split(" ").slice(0, 4).join(" ");
        const imageUrl = `https://cataas.com/cat/says/${firstFourWords}`;
        setCatImage(imageUrl);
      })
      .catch((error) => {
        console.error("Hey! theres and error", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleButtonClick = () => {
    fetchCatData();
  };

  return (
    <div className="general-container">
      <h1>Random facts</h1>
      <div className="cat-card">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {error && <p>Error: {error}</p>}
            <p>{catFact}</p>
            <img src={catImage} alt="Cat" />
          </>
        )}
        <CatButton onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Card;
