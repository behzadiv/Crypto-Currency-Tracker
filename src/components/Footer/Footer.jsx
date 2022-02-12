import styles from "./Footer.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faHome,
  faWallet,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import GetWindowInnerwidth from "../../utility/GetWindowInnerwidth";

const Footer = () => {
  const items = [
    {
      name: "Home",
      to: "/",
      exact: true,
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      name: "Favorites",
      to: "/favorites",
      icon: <FontAwesomeIcon icon={(faHome, faHeart)} />,
    },
    {
      name: "Converter",
      to: "/currency-converter",
      icon: <FontAwesomeIcon icon={faCalculator} />,
    },
    { name: "Fund", to: "/fund", icon: <FontAwesomeIcon icon={faWallet} /> },
  ];
  const {width}=GetWindowInnerwidth()
 return (
    <div>
      {width >= 800 ? (
        // <div className="footer">
        //   <p>Footer</p>
        // </div>
        null
      ) : (
        <div className="footermenu">
          <ul>
            {items.map((item) => {
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    exact={item.exact || false}
                    activeClassName="activeLink"
                    className="list"
                  >
                    <span className="footer-icon">{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Footer;
