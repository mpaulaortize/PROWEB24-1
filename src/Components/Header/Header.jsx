import React from "react";
import { useState } from "react";
import "./Header.css";
import { NAV_DATA } from "../../Cons/NAV_DATA";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (e) => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <img
        className="logo-img"
        src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5315_-_Apple-512.png"
        alt="Apple Logo"
      />
      <Menu items={NAV_DATA} showMenu={showMenu} />
      <button id="hamburguer-btn" onClick={handleShowMenu}>
        <img
          className="menu-nav-icon"
          src="../../../img/1024px-Hamburger_icon_white.svg.png"
          alt="Hamburger button"
        />
      </button>
      <img className="img-nav" src="../../../img/search.png" alt="Search"></img>
    </header>
  );
}

function Menu({ items, showMenu }) {
  return (
    <nav className={!showMenu ? "hidden" : ""}>
      <ul className="nav-items">
        {items.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </ul>
    </nav>
  );
}

function MenuItem({ item }) {
  const { text } = item;
  return (
    <li>
      <a href="#">{text}</a>
    </li>
  );
}
