import styles from "./Crypto.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from "react"

const Crypto = ({symbol,logo,price,name,daily,number,addToList}) => {
    const oneDay = daily
    
    const convertVolume=(volume)=>{
        return(
            Math.abs(Number(volume))>=1.0e+9 
            ? (Math.abs(Number(volume))/1.0e+9).toFixed(2) + "B"
            : Math.abs(Number(volume))>=1.0e+6 
            ? (Math.abs(Number(volume))/1.0e+6).toFixed(2) + "M"
            : Math.abs(Number(volume))>=1.0e+3
            ? (Math.abs(Number(volume))/1.0e+3).toFixed(2) + "K"
            : Math.abs(Number(volume))
        )
    }
    const[myList,setMyList]=useState([])
    const myRef = useRef()
    const addFavorite =()=>{
        const newOne = myRef.current.innerText
        //console.log(newOne);
        addToList(newOne)
    }
    
    return ( 
        <div className="cryptoRow">
            <h5>{ true ? number+1 : number}</h5>
            <div className="cryptoName">
                <span className="favorite" onClick={addFavorite}><FontAwesomeIcon icon={faStar}/></span> 
                <img src={logo} alt=""/> 
                <h3>{name}</h3>
            </div>
            <h5 ref={myRef}>{symbol}</h5> 
            <h4>${(price*1).toFixed(2)}</h4>
            <h4 className={oneDay.price_change_pct >=0 ? "green":"red"}>{(oneDay.price_change_pct*100).toFixed(2)} %</h4>
            <h4>${convertVolume(oneDay.volume)}</h4>
        </div>
     );
}
 
export default Crypto;