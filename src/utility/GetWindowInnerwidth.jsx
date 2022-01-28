import { useEffect, useState } from "react";

const GetWindowInnerwidth = () => {
    const getWindowWidth = () => {
        const width = window.innerWidth;
        return { width };
    };
    const [windowInnerWidth, setWindoInnerWidth] = useState(getWindowWidth());
      const handleResize = () => {
        setWindoInnerWidth(getWindowWidth());
      };
      useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return windowInnerWidth;
      }, []);
    return ( windowInnerWidth );
}
 
export default GetWindowInnerwidth;