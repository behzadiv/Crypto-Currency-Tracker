import { useEffect, useState } from "react";
import CryptoList from "../components/CryptoList/CryptoList";
import axios from "axios"

const Favorite = () => {
        const data = JSON.parse( localStorage.getItem("data"))
        const[allData , setAllData]= useState([])
        //console.log(data);
        const addToFavoriteList = (item)=>{
            const index = data.indexOf(item)
            //console.log(item,data,index);
            if(index>-1){
                data.splice(index,1)
                localStorage.setItem("data",JSON.stringify(data))
            }
        }
        useEffect(()=>{
            let isMounted= true;
            if(data && data.length){axios.get(`https://api.nomics.com/v1/currencies/ticker?key=2894a1f621619bd9c9778bcb9b476fcc211f623d&ids=${data}&interval=1h,1d,7d,30d,365d&convert=USD&_ga=2.244143877.18783313.1633931534-1081431702.1633931534&per-page=200`
            )
           .then((response)=>{
               
               if(isMounted)setAllData(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })}
            return()=>{isMounted = false}
        },[data])
        return ( 
            <div>
               {allData.length ? <CryptoList allData = {allData} addToList={addToFavoriteList}/ > : <p>there is no favorite cryptos</p>}
            </div>
     );
}
 
export default Favorite;