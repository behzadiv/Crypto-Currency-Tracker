import styles from "./Crypto.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from "react"

const Crypto = ({symbol,logo,price,name,oneDayChange,number,addOrRemoveFavorite,isFavorite,volume24,uuid}) => {
  //const oneDayChange = daily
    
    const convertVolume=(volume)=>{
        //console.log(volume);
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
        console.log(newOne);
        addOrRemoveFavorite(newOne)
    }
    
    return (
        
    <div>
        {window.innerWidth >= 600  
        ?
        (<div className="cryptoRow">
            <h5>{ true ? number+1 : number}</h5>
            <div className="cryptoName">
                <span className={isFavorite ? "favorite" : "notFavorite" }onClick={addFavorite}><FontAwesomeIcon icon={faStar}/></span> 
                <img src={logo} alt=""/> 
                <h3>{name}</h3>
            </div>
            <h5>{symbol}</h5>
            <h5 ref={myRef} style={{display:"none"}}>{uuid}</h5> 
            <h4>${price*1 < .1 ? (price*1).toFixed(5) : (price*1).toFixed(2) }</h4>
            <h4 className={oneDayChange >=0 ? "green":"red"}>{(oneDayChange*1).toFixed(2)} %</h4>
            <h4>${convertVolume(volume24)}</h4>
        </div>)
        :
       (<div className="cryptoRow">
            <h5>{ true ? number+1 : number}</h5>
            <div className="cryptoName">
                <img src={logo} alt=""/> 
                <h5>{symbol}</h5> 
                <h5 ref={myRef} style={{display:"none"}}>{uuid}</h5> 
            </div>
            <h4>${price*1 < .1 ? (price*1).toFixed(5) : (price*1).toFixed(2) }</h4>
            <h4 className={oneDayChange >=0 ? "green":"red"}>{(oneDayChange*1).toFixed(2)} %</h4>
                <span className={isFavorite ? "favorite" : "notFavorite" }onClick={addFavorite}><FontAwesomeIcon icon={faStar}/></span> 
            
        </div>)}  
    </div>  
     )
   
}
 
export default Crypto;