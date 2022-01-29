import "./CurrencyConverter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { useEffect, useState } from "react";
import axios from "axios";
const CurrencyConvertor = () => {
  const direction = <FontAwesomeIcon icon={faExchangeAlt} />;
  const [allSymbol, setAllSymbol] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=2894a1f621619bd9c9778bcb9b476fcc211f623d&ids=&interval=1h,1d,7d,30d,365d&convert=USD&_ga=2.244143877.18783313.1633931534-1081431702.1633931534&per-page=200`
      )
      .then((res) => {
        setAllSymbol(
          res.data.map((item) => {
            return item.id;
          })
        );
      });
  }, []);
  const options = [];
  //console.log(allSymbol);
  allSymbol.map((item) => {
    //console.log({ value: item, label: item });
    options.push({ value: item, label: item });
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionTwo, setSelectedOptionTwo] = useState(null);
  const [cryptoQty, setCryptoQty] = useState(1);
  const [firstCrypto, setFirstCrypto] = useState("BTC");
  const [firstCryptoPrice, setFirstCryptoPrice] = useState();
  const [secondCrypto, setSecondCrypto] = useState("USDT");
  const [secondCryptoPrice, setSecondCryptoPrice] = useState();
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setFirstCrypto(selectedOption.value);
    console.log(selectedOption);
  };
  const handleChangeTwo = (selectedOption) => {
    setSelectedOptionTwo(selectedOption);
    setSecondCrypto(selectedOption.value);
    console.log(selectedOption);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=2894a1f621619bd9c9778bcb9b476fcc211f623d&ids=${firstCrypto}&interval=1h,1d,7d,30d,365d&convert=USD&_ga=2.244143877.18783313.1633931534-1081431702.1633931534&per-page=200`
      )
      .then((res) => {
        console.log(res.data);
        setFirstCryptoPrice(res.data[0].price * 1);
      });
  }, [firstCrypto]);
  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=2894a1f621619bd9c9778bcb9b476fcc211f623d&ids=${secondCrypto}&interval=1h,1d,7d,30d,365d&convert=USD&_ga=2.244143877.18783313.1633931534-1081431702.1633931534&per-page=200`
      )
      .then((res) => {
        console.log(res.data);
        setSecondCryptoPrice(res.data[0].price * 1);
      });
  }, [secondCrypto]);
  return (
    <div className="converter-container">
      <h2 className="converter-container-title">
        Cryptocurrency Converter Calculator
      </h2>
      <div className="input-qty">
        <input
          type="number"
          range
          value={cryptoQty}
          onChange={(e) => {
            setCryptoQty(e.target.value);
          }}
        />
      </div>
      <div className="select-input">
        <Select
          selectedValue={selectedOption}
          options={options}
          onChange={handleChange}
          className="select-option"
        />
        <span className="exchange-icon">{direction}</span>
        <Select
          value={selectedOptionTwo}
          options={options}
          onChange={handleChangeTwo}
          className="select-option"
        />
      </div>
      <div className="equal-section">
        <span>
          {cryptoQty ? cryptoQty : 1} ({firstCrypto})
        </span>
        <span> = </span>
        <span>
          {(
            (firstCryptoPrice * (cryptoQty ? cryptoQty : 1)) /
            secondCryptoPrice
          ).toFixed(8)}{" "}
          ({secondCrypto})
        </span>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
