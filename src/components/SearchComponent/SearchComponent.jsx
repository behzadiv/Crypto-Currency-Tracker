import "./SearchComponent.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch}from "@fortawesome/free-solid-svg-icons";
import {useSearchInputAction} from "../../provider/SearchProvider"
const SearchComponent = () => {
    
    const dispatch = useSearchInputAction()
    const changeHandler = (e)=>{
            console.log(e.target.value);
            dispatch(e.target.value)
    }
    return ( 
        <div className="search">
        <input
          type="text"
          onChange={(e) => changeHandler(e)}
          placeholder="Search..."
        />
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
      </div>
     );
}
 
export default SearchComponent;