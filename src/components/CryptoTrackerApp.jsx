import axios from "axios";
import { useEffect, useState } from "react";
import CryptoList from "./CryptoList";

const CryptoTrackerApp = () => {
    const[allData,setAllData]=useState([])
    let addItem = "ADA";
    console.log(addItem);
    const myUrl = `https://api.nomics.com/v1/currencies/ticker?key=2894a1f621619bd9c9778bcb9b476fcc211f623d&ids=ICP,BTC,ETH,ATOM,HEX,DOT,${addItem},&interval=1h,1d,7d,30d,365d&convert=USD&_ga=2.244143877.18783313.1633931534-1081431702.1633931534&per-page=100`
    const myRequest = ()=>{
        axios.get(myUrl)
            .then((response)=>{
                
                console.log(response.data);
                setAllData(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    useEffect(()=>{
        myRequest()
        setInterval(() => {
            myRequest()
            }, 50000);
        
    },[])
    console.log(allData);
    return ( 
        <div>
            
            <CryptoList  allData={allData}/>
        </div>
     );
}
 
export default CryptoTrackerApp;