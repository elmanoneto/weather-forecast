import React, { useState, createContext } from 'react'

export const SearchContext = createContext<any>(null)

export const SearchContextProvider = () => {
    const [search, setSearch] = useState([])

    return (
        <SearchContext.Provider value={[search, setSearch]}>
        </SearchContext.Provider>
    )
}