import axios from "axios";
import { useEffect, useState } from "react";

const CryptoTrackerApp = () => {
    const[allData,setAllData]=useState([])
    useEffect(()=>{
            axios.get("https://api.nomics.com/v1/currencies/ticker?key=2894a1f621619bd9c9778bcb9b476fcc211f623d&ids=BTC,ETH&interval=1h,1d,7d,30d,365d&convert=USD&_ga=2.244143877.18783313.1633931534-1081431702.1633931534")
            .then((response)=>{
                
                //console.log(response.data);
                setAllData(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
        
    },[])
    console.log(allData);
    return ( 
        <div>
            
        </div>
     );
}
 
export default CryptoTrackerApp;