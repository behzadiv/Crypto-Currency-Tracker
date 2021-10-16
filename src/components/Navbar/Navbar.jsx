import { useEffect, useState } from "react";
import styles from "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWaveAlt,faSearch,faTimes,faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = ({searchInput ,showFavorite,showAll}) => {
    const[isShow,setIsShow]=useState(false)
    const changeHandler=(e)=>{
       searchInput(e.target.value)
   } 
//    useEffect(()=>{
//      if(window.screen.width>800)setIsShow(false)
//       console.log(isShow);
//    },[])
   const showMenu = (e)=>{
       console.log(e.target);
       (!isShow ? setIsShow(true): setIsShow(false))
       //console.log(isShow);
    }
    return ( 
        <div className="navbar">
            <div className="logo">
                <FontAwesomeIcon icon={faMoneyBillWaveAlt} className="logoIcon"/>
                <a href=""><h2>Crypto</h2><span>make money</span></a>
                <div>
                    <ul className={!isShow || (window.screen.width>800) ? "menu": "hemergerMenu"}>
                        <li><a onClick={showAll}>All</a></li>
                        <li><a onClick={showFavorite}>Favorites</a></li>
                        <li><a >Currency Converter</a></li>
                    </ul>
                </div>
            </div>
            <div className={!isShow ? "search" : "searchHidden"}>
                <input type="text" onChange={(e)=>changeHandler(e)} />
                <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
            </div>
            <div  onClick={showMenu}><FontAwesomeIcon icon={isShow? faTimes : faBars} className="bars"/></div>
         </div>
     );
}
 
export default Navbar;