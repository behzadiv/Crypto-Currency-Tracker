import axios from "axios";
import { useEffect, useState } from "react";
import CryptoList from "./CryptoList";
import Navbar from "./Navbar/Navbar"


const CryptoTrackerApp = () => {
    const[allData,setAllData]=useState([])
    const[filteredData,setFilteredData]=useState([])
    const [myList,setMyList]=useState([])
    const myUrl = `https://api.nomics.com/v1/currencies/ticker?key=2894a1f621619bd9c9778bcb9b476fcc211f623d&ids=${myList}&interval=1h,1d,7d,30d,365d&convert=USD&_ga=2.244143877.18783313.1633931534-1081431702.1633931534&per-page=200`
    const myRequest = ()=>{
        axios.get(myUrl)
            .then((response)=>{
                
                console.log("this",response.data);
                setAllData(response.data)
                setFilteredData(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    useEffect(()=>{
        myRequest()
        var myInterval =setInterval(myRequest,50000);
        
           
        
    },[])
    
    const searchInput=(input)=>{
        
        const filtered=allData.filter((item)=>{
           return(
            ((item.name).toLowerCase()).includes((input).toLowerCase()))
        })
        setFilteredData(filtered);
        //console.log(filteredData);
   }
    return ( 
        <div>
            <Navbar  searchInput={searchInput}/ >
            <CryptoList  allData={filteredData}/>
        </div>
     );
}
 
export default CryptoTrackerApp;