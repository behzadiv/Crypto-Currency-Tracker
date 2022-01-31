import "./Fund.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoiceDollar,
  faDownload,
  faSync,
  faHistory,
  faEye,
  faEyeDropper,
  faEyeSlash,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import btc from "../data/btc.svg"
import ada from "../data/ada.svg"
import { useState } from "react";
const Funds = () => {
  const [isShow, setIsShow] = useState(false);
  const hideFund = () => {
    return isShow ? setIsShow(false) : setIsShow(true);
  };
  console.log(document.documentElement.scrollTop);
  return (
    <div className="fund-container">
      <section className="fund-header">
        <div className="my-asset">
          <h5>My Assets</h5>
          <span onClick={hideFund}>
            {!isShow ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </span>
        </div>
        <div className="fund">{isShow ? "$1000" : "******"}</div>
        <div className="fund-icons">
          <div>
            <span>
              <FontAwesomeIcon icon={faFileInvoiceDollar} />
            </span>
            <h5>Deposit</h5>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faDownload} />
            </span>
            <h5>Whithdraw</h5>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faSync} />
            </span>
            <h5>Transfer</h5>
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faHistory} />
            </span>
            <h5>History</h5>
          </div>
        </div>
      </section>
      <section className="fund-body">
          <div className="fund-body-title">
              <h5>Coin</h5>
              <h5> Total <FontAwesomeIcon icon={faArrowDown}/></h5>
          </div>
          <div className = "fund-body-row">
              <div className="logo">
                 <img src={btc} alt=""/>
                 <p>Bitcoin</p>
              </div>
                <div>{isShow ? "$800" : "******"}</div>
          </div>
          <div className = "fund-body-row">
              <div className="logo">
                 <img src={ada} alt=""/>
                 <p>Cardano</p>
              </div>
                <div>{isShow ? "$200" : "******"}</div>
          </div>
      </section>
    </div>
  );
};

export default Funds;
