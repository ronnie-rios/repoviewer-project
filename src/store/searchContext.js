import { createContext, useContext, useState } from "react";

const SearchContext = createContext({
    name: 'Netflix',
});

function SearchProvider({ children }) {
    const [nameSearch, setNameSearch] = useState({
        name: 'Netflix'
    });   
     
    return (
        <SearchContext.Provider value = 
        {{
            nameSearch: nameSearch,
            setNameSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    return useContext(SearchContext)
}

export { SearchProvider }