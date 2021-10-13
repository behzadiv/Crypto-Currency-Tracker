import { useState } from "react";

const Navbar = ({searchInput}) => {
    
    const changeHandler=(e)=>{
       searchInput(e.target.value)
   } 
   
    return ( 
        <div>
            
            <input type="text" onChange={(e)=>changeHandler(e)} />
            
        </div>
     );
}
 
export default Navbar;