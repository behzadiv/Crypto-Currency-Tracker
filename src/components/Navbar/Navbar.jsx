import { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWaveAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink, withRouter } from "react-router-dom";
import SearchComponent from "../../components/SearchComponent/SearchComponent";

const Navbar = ({ searchInput, showFavorite, showAll }) => {
  const items = [
    { name: "Home", to: "/", exact: true },
    { name: "Favorites", to: "/favorites" },
    { name: "Converter", to: "currency-converter" },
    { name: "Profile", to: "profile" },
  ];

  const changeHandler = (e) => {
    searchInput(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <FontAwesomeIcon icon={faMoneyBillWaveAlt} className="logoIcon" />
        <a href="">
          <h2>Crypto</h2>
          <span>make money</span>
        </a>
        <div>
          <ul className="menu">
            {items.map((item) => {
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    exact={item.exact || false}
                    activeClassName="activeLink"
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <SearchComponent />
    </div>
  );
};

export default withRouter(Navbar);
