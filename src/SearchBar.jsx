import React from 'react';
import './SearchBar.css'
import {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import {SearchQuery} from "./SearchQuery.jsx";

const SearchBar = () => {
    const {setSearchQuery} = useContext(SearchQuery)
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        setSearchQuery(search);
        console.log(search);
    }
    const searchInput = (input) => {
        setSearch(input.target.value)

    }
    return (
        <div>
            <div className="SearchBar">
            <input type="search" placeholder="Search for cities..." id = "searchbar" value = {search}  onChange={searchInput} />
                <input type="button" value="Search" id= "SearchBtn" onClick = {handleSearch} />
                <label htmlFor="SearchBtn"></label>
            </div>
        </div>
    );
};



export default SearchBar;