import { children ,useLayoutEffect,useState} from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
const Layout = ({children}) => {
    const [size, setSize] = useState(0);
    
        useLayoutEffect(() => {
            function updateSize() {
            setSize(window.innerWidth);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        
    
    console.log(size)

    return (
        <>
            <Header/>
                {children}
             <Footer/>
        </>
     );
}
 
export default Layout;