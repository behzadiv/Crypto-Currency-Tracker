import React, { useContext, useState } from 'react';

const SearchContext = React.createContext()
const SearchContextDispatcher = React.createContext()
const SearchProvider = ({children}) => {
    const[searchInput,setSearchInput]= useState("")
    console.log(searchInput);
    return ( 
        <SearchContext.Provider value={searchInput} >
          <SearchContextDispatcher.Provider value={setSearchInput}>
            {children}
          </SearchContextDispatcher.Provider>
        </SearchContext.Provider>
     );
}
 
export default SearchProvider;

export const useSearchInput =()=> useContext(SearchContext)
export const useSearchInputAction =()=> useContext(SearchContextDispatcher)