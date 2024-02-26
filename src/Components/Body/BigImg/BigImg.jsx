import React from "react";
import "./BigImg.css";
import { BIG_CARD } from "../../../Cons/BIG_CARD";

export function BigImg(props) {
  const { id, h1, p, src, alt } = props;
  return (
    <div className="big-img-container">
      {BIG_CARD.map(({ id, h1, p, src, alt }) => (
        <div className="bigcard" key={id}>
          <div className="info-div">
            <h1>{h1}</h1>
            <p>{p}</p>
            <div className="link-div">
              <a href="#">Learn more</a>
              <a href="#">Buy</a>
            </div>
          </div>
          <img className="hero-img" src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
}
