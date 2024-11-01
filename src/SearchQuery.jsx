import React, {useContext, useCallback} from 'react';
import {useEffect, useState} from 'react'
import SearchBar from "./SearchBar.jsx";
import {createContext} from "react";
import PropTypes from "prop-types";

export const SearchQuery = createContext()


export const SearchProvider = ({children}) => {
    const [searchQuery, setSearchQuery] = useState("Medak")


    const updateSearchQuery = useCallback((value) =>setSearchQuery(value), [])
    return (
        <SearchQuery.Provider value = {{searchQuery, setSearchQuery: updateSearchQuery}}>
            {children}
        </SearchQuery.Provider>
    );
};

SearchProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
