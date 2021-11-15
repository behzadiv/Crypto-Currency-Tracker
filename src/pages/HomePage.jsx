import axios from "axios";
import { useEffect, useState } from "react";
import CryptoList from "../components/CryptoList/CryptoList";
import Navbar from "../components/Navbar/Navbar";
import { useSearchInput } from "../provider/SearchProvider";

const HomePage = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [favoriteList, setFavoriteList] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const userInput = useSearchInput();
  const addToFavoriteList = (item) => {
    console.log(item);
    if (!favoriteList.includes(item)) setFavoriteList([...favoriteList, item]);
    else {
      const index = favoriteList.indexOf(item);
      if (index > -1) {
        favoriteList.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(favoriteList));
      }
    }
  };
  const myRequest = (newList) => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=2894a1f621619bd9c9778bcb9b476fcc211f623d&ids=&interval=1h,1d,7d,30d,365d&convert=USD&_ga=2.244143877.18783313.1633931534-1081431702.1633931534&per-page=200`
      )
      .then((response) => {
        console.log("ok", newList);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log(userInput);
    searchInput(userInput);
  }, [userInput]);

  useEffect(() => {
    myRequest();
    setInterval(myRequest, 5000);
    localStorage.setItem("data", JSON.stringify(favoriteList));
    console.log("errrrr");
  }, [favoriteList]);

  const searchInput = (x) => {
    const filtered = allData.filter((item) => {
      return item.name.toLowerCase().includes(x.toLowerCase());
    });
    setFilteredData(filtered);
  };
  return (
    <div>
      <CryptoList allData={filteredData} addToList={addToFavoriteList} />
    </div>
  );
};

export default HomePage;
