import { useEffect, useState } from "react";
import CryptoList from "../components/CryptoList/CryptoList";
import axios from "axios";
import "./Favorite.css";
const Favorite = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const [allData, setAllData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [favoriteString, setFavoriteString] = useState("");
  const [dataChanged, setDataChanged] = useState(true);
  const createFavoritesString = () => {
    data.map((item) => {
      if (!favorites.includes(`uuids[]=${item}&`))
        favorites.push(`uuids[]=${item}&`);
    });
    setFavoriteString(favorites.join(""));
  };
  const removeFromFavoriteList = (item) => {
    const index = data.indexOf(item);
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    favorites.splice(index, 1);
    createFavoritesString();
    setDataChanged(true);
  };
  const requestData = () => {
    let isMounted = true;
    if (data && data.length) {
      axios({
        method: "GET",
        url: `https://coinranking1.p.rapidapi.com/coins/?${
          favoriteString
        }`,
        // params: {referenceCurrencyUuid:"HIVsRcGKkPFtW"},
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "7dc7076d97msh973dbda7c2e6c5dp11a1c2jsn4ed091e41d67",
        },
      })
        .then((response) => {
          //console.log(response.data.data.coins);
          if (isMounted) setAllData(response.data.data.coins);
          setDataChanged(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setAllData([]);
    }
    return () => {
      isMounted = false;
    };
  };
  // useEffect(()=>{
  //   createFavoritesString()
  //   console.log(favorites);
  //   //requestData()
  // },[favorites])
  useEffect(() => {
    createFavoritesString();
    requestData();
  }, [favorites, dataChanged]);
  return (
    <div>
      {allData.length ? (
        <CryptoList allData={allData} addOrRemoveFavorite={removeFromFavoriteList} />
      ) : (
        <p className="empty-text">Favorite list is empty...!</p>
      )}
    </div>
  );
};

export default Favorite;
