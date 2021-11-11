import { useState } from "react"
import Crypto from "../Crypto/Crypto"
import styles from "./CryptoList.css"
import Navbar from "../Navbar/Navbar"
const CryptoList = ({allData,addToList}) => {
    //console.log(allData);
    const[searchData,setSearchData]=useState([])
    const data = JSON.parse( localStorage.getItem("data"))
    
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
                  addToList={addToList}
                  isFavorite ={data.includes(item.id)}
                  />
            
                )
             })
        )
        
    }
    return (  
        <div>
            
           <div className="title">
               <h5>#</h5>
               <h5 id="name">Name</h5>
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