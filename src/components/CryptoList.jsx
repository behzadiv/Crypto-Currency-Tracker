import { useState } from "react"
import Crypto from "./Crypto"
import styles from "./CryptoList.css"
import Navbar from "./Navbar/Navbar"
const CryptoList = ({allData}) => {
    //console.log(allData);
    const[searchData,setSearchData]=useState([])
    const renderCryptoList=()=>{
        return(
            allData.map((item)=>{
                return(
                 <Crypto 
                  number ={allData.indexOf(item)}
                  key={item.id}
                  symbol={item.symbol}
                  logo={item.logo_url}
                  price={item.price}
                  name = {item.name}
                  daily = {item["1d"]}
                  />
                )
             })
        )
        
    }
    return (  
        <div>
            
           <div className="title">
               <h5>#</h5>
               <h5>Name</h5>
               <h5>Symbol</h5>
               <h5>Price</h5>
               <h5>1d change</h5>
               <h5>Volume</h5>
           </div>
           {renderCryptoList()}
        </div>
    );
}
 
export default CryptoList;