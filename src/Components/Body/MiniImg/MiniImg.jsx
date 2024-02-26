import React from "react";
import "./MiniImg.css";
import { MINI_IMG } from "../../../Cons/MINI_IMG";

export function MiniImg(props) {
  const { id, h1, p, src, alt } = props;

  return (
    <div className="grid-mini">
      {MINI_IMG.map(({ id, h1, p, src, alt }) => (
        <div className="mini-cuadro" key={id}>
          <div className="infomini-div">
            <h1>{h1}</h1>
            <p>{p}</p>
            <div className="linkmini-div">
              <a href="#">Learn more</a>
              <a href="#">Buy</a>
            </div>
          </div>
          <img className="heromini-img" src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
}
