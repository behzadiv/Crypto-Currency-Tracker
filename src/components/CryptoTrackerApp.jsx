import axios from "axios";
import { useEffect, useState } from "react";
import CryptoList from "./CryptoList";
import Navbar from "./Navbar/Navbar"


const CryptoTrackerApp = () => {
    const[allData,setAllData]=useState([])
    const[filteredData,setFilteredData]=useState([])
    const [myList,setMyList]=useState([])
    const[favoriteList,setFavoriteList]=useState(["BTC","ETH"])
    const[showFavoriteList,setShowFavoriteList]=useState(false)

    
    const addToFavoriteList = (item)=>{
        console.log(item);
        setFavoriteList([...favoriteList,item])
     }
     const showFavorite = ()=>{
         setShowFavoriteList(true)
     }
     const showAll = ()=>{
         setShowFavoriteList(false)   
     }

    //const myUrl =`https://api.nomics.com/v1/currencies/ticker?key=2894a1f621619bd9c9778bcb9b476fcc211f623d&ids=${showFavoriteList ? favoriteList : myList}&interval=1h,1d,7d,30d,365d&convert=USD&_ga=2.244143877.18783313.1633931534-1081431702.1633931534&per-page=200`
        
    const myRequest = ()=>{
        //console.log(showFavoriteList);
             axios.get(`https://api.nomics.com/v1/currencies/ticker?key=2894a1f621619bd9c9778bcb9b476fcc211f623d&ids=${showFavoriteList ? favoriteList : myList}&interval=1h,1d,7d,30d,365d&convert=USD&_ga=2.244143877.18783313.1633931534-1081431702.1633931534&per-page=200`
             )
            .then((response)=>{
                
                setAllData(response.data)
                setFilteredData(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    useEffect(()=>{
        myRequest()
        var myInterval =setInterval(myRequest,5000);
        
           
        
    },[showFavoriteList])
    
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
            <Navbar  searchInput={searchInput} showFavorite={showFavorite} showAll={showAll}/ >
            <CryptoList  allData={filteredData} addToList={addToFavoriteList}/>
        </div>
     );
}
 
export default CryptoTrackerApp;