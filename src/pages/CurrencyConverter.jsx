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
    ({
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coins/`,
      // params: {referenceCurrencyUuid:"HIVsRcGKkPFtW"},
      headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '7dc7076d97msh973dbda7c2e6c5dp11a1c2jsn4ed091e41d67'
      }
    }
      )
      .then((res) => {
        setAllSymbol(
          res.data.data.coins.map((item) => {
            return (item.symbol);
          })
        );
      });
  }, []);
  const options = [];
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
    //console.log(selectedOption);
  };
  const handleChangeTwo = (selectedOption) => {
    setSelectedOptionTwo(selectedOption);
    setSecondCrypto(selectedOption.value);
    //console.log(selectedOption);
  };
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coins/?symbols[]=${firstCrypto}`,
      // params: {referenceCurrencyUuid:"HIVsRcGKkPFtW"},
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key":
          "7dc7076d97msh973dbda7c2e6c5dp11a1c2jsn4ed091e41d67",
      },
    }).then((res)=>{
      //console.log(res.data.data.coins);
      setFirstCryptoPrice(res.data.data.coins[0].price)
    })
  }, [firstCrypto]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coins/?symbols[]=${secondCrypto}`,
      // params: {referenceCurrencyUuid:"HIVsRcGKkPFtW"},
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key":
          "7dc7076d97msh973dbda7c2e6c5dp11a1c2jsn4ed091e41d67",
      },
    }).then((res)=>{
     setSecondCryptoPrice(res.data.data.coins[0].price)
    })
  }, [secondCrypto]);
  return (
    <div className="converter-container">
      <h2 className="converter-container-title">
        Cryptocurrency Converter Calculator
      </h2>
      <div className="input-qty">
        <input
          type="number"
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
