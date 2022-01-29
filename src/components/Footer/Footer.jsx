import styles from "./Footer.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faHome,
  faUser,
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
      to: "currency-converter",
      icon: <FontAwesomeIcon icon={faCalculator} />,
    },
    { name: "Profile", to: "profile", icon: <FontAwesomeIcon icon={faUser} /> },
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
                    {item.icon}
                    {item.name}
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
