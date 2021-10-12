import styles from "./Crypto.css"

const Crypto = ({symbol,logo,price,name,daily,number}) => {
    const oneDay = daily
    
    const convertVolume=(volume)=>{
        return(
            Math.abs(Number(volume))>=1.0e+9 
            ? (Math.abs(Number(volume))/1.0e+9).toFixed(2) + "B"
            : Math.abs(Number(volume))>=1.0e+6 
            ? (Math.abs(Number(volume))/1.0e+6).toFixed(2) + "M"
            : Math.abs(Number(volume))>=1.0e+3
            ? (Math.abs(Number(volume))/1.0e+3).toFixed(2) + "K"
            : Math.abs(Number(volume))
        )
    }
    return ( 
        <div className="cryptoRow">
            <h5>{ true ? number+1 : number}</h5>
            <div  className="cryptoName">
                <img src={logo} alt=""/> 
                <h3>{name}</h3>
            </div>
            <h5>{symbol}</h5> 
            <h4>${(price*1).toFixed(2)}</h4>
            <h4 className={oneDay.price_change_pct >=0 ? "green":"red"}>{(oneDay.price_change_pct*100).toFixed(2)} %</h4>
            <h4>${convertVolume(oneDay.volume)}</h4>
        </div>
     );
}
 
export default Crypto;