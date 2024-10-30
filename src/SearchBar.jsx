import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div>
            <div className="SearchBar">
            <input type="search" placeholder="Search for cities..." id = "searchbar" />
                <input type="button" value="Search" id= "SearchBtn"/>
                <label htmlFor="SearchBtn"></label>
            </div>
        </div>
    );
};

export default SearchBar;