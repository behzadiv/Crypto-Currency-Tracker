import axios from "axios";
import { useEffect, useState } from "react";
import CryptoList from "../components/CryptoList/CryptoList";
import Navbar from "../components/Navbar/Navbar";
import { useSearchInput } from "../provider/SearchProvider";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

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
    if (userInput.length === 0) setInterval(() => myRequest, 5000);
    localStorage.setItem("data", JSON.stringify(favoriteList));
    //console.log(userInput.length);

    // if(userInput.length>0)clearInterval(myTimer)
  }, [favoriteList]);

  const searchInput = (x) => {
    const filtered = allData.filter((item) => {
      return item.name.toLowerCase().includes(x.toLowerCase());
    });
    setFilteredData(filtered);
    //console.log(filtered);
  };
  const goToUp = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const myFunction = () => {
      let myBtn = document.querySelector(".up-button");
      if (document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
      } else {
        myBtn.style.display = "none";
      }
    };
    // clean up code
    window.removeEventListener("scroll", myFunction);
    window.addEventListener("scroll", myFunction);
    return () => window.removeEventListener("scroll", myFunction);
  }, []);

  return (
    <div className="homePage">
      {allData.length > 0 ? (
        <div>
          <CryptoList allData={filteredData} addToList={addToFavoriteList} />
        </div>
      ) : (
        <h2 className="loading">
          <span className="span1">L</span>
          <span className="span2">o</span>
          <span className="span3">a</span>
          <span className="span4">d</span>
          <span className="span5">i</span>
          <span className="span6">n</span>
          <span className="span7">g</span>
        </h2>
      )}
      <div className="up-button">
        <span onClick={goToUp}>
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </span>
      </div>
    </div>
  );
};

export default HomePage;
