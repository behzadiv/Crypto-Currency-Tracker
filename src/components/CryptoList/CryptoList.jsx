import { useState } from "react";
import Crypto from "../Crypto/Crypto";
import styles from "./CryptoList.css";
import Navbar from "../Navbar/Navbar";
import GetWindowInnerwidth from "../../utility/GetWindowInnerwidth";
const CryptoList = ({ allData, addOrRemoveFavorite }) => {
  //console.log(allData);
  const [searchData, setSearchData] = useState([]);
  const data = JSON.parse(localStorage.getItem("data"));
  const {width} = GetWindowInnerwidth()
  const renderCryptoList = () => {
    return allData.map((item) => {
      return (
        <Crypto
          number={allData.indexOf(item)}
          key={item.rank}
          symbol={item.symbol}
          logo={item.iconUrl}
          price={item.price}
          name={item.name}
          oneDayChange={item.change}
          addOrRemoveFavorite={addOrRemoveFavorite}
          volume24={item["24hVolume"]}
          isFavorite={data.includes(item.uuid)}
          uuid={item.uuid}
        />
      );
    });
  };
  return (
    <div className="body-content">
        
      {width >= 600 ? (
        <div className="title">
          <h5>#</h5>
          <h5 id="name">Name</h5>
          <h5>Symbol</h5>
          <h5>Price</h5>
          <h5>1d change</h5>
          <h5>Volume</h5>
        </div>
      ) : (
        <div className="title">
          <h5>#</h5>
          <h5 id="name">Name</h5>
          <h5>Price</h5>
          <h5>1d</h5>
        </div>
      )}

      {renderCryptoList()}
    </div>
  );
};

export default CryptoList;
