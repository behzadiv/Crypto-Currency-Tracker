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
  const addToFavoriteList = (selectedCryptoUuid) => {
    if (!favoriteList.includes(selectedCryptoUuid))
      setFavoriteList([...favoriteList, selectedCryptoUuid]);
    else {
      const index = favoriteList.indexOf(selectedCryptoUuid);
      if (index > -1) {
        favoriteList.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(favoriteList));
        myRequest();
      }
    }
  };
  const myRequest = () => {
    axios({
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coins/`,
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "7dc7076d97msh973dbda7c2e6c5dp11a1c2jsn4ed091e41d67",
      },
    })
      .then((response) => {
        setAllData(response.data.data.coins);
        setFilteredData(response.data.data.coins);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const searchInput = (x) => {
    const filtered = allData.filter((item) => {
      return item.name.toLowerCase().includes(x.toLowerCase());
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    myRequest();
    localStorage.setItem("data", JSON.stringify(favoriteList));
  }, [favoriteList]);
  const [intervalId, setIntervalId] = useState(0);
  useEffect(() => {
    if (allData.length) {
      searchInput(userInput);
    }
    if (userInput.length) {
      clearInterval(intervalId);
      return;
    }
    const myInterval = setInterval(() => {
      myRequest();
    }, 5000);
    setIntervalId(myInterval);
    return () => clearInterval(myInterval);
  }, [userInput]);

  //logic of goToTop btn
  const [collapsed, setCollapsed] = useState(false);
  const goToUp = () => {
    setCollapsed(false);
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(collapsed);
  };
  useEffect(() => {
    const myFunction = () => {
      if (
        collapsed &&
        (document.documentElement.scrollTop === 0 ||
          document.documentElement.scrollTop > 20)
      ) {
        return;
      }
      const myBtn = document.querySelector(".up-button");
      if (document.documentElement.scrollTop > 20) {
        myBtn.style.display = "block";
        setCollapsed(true);
      } else {
        myBtn.style.display = "none";
        setCollapsed(false);
      }
    };
    // clean up code
    window.addEventListener("scroll", myFunction);
    return () => {
      window.removeEventListener("scroll", myFunction);
    };
  }, [collapsed]);

  return (
    <div className="homePage">
      {allData.length > 0 ? (
        <div>
          <CryptoList
            allData={filteredData}
            addOrRemoveFavorite={addToFavoriteList}
          />
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
