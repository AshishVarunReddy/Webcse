import React from 'react';
import './SearchBar.css'
import {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import {SearchQuery} from "./SearchQuery.jsx";

const myFav = new Set([])

const SearchBar = () => {

    const {setSearchQuery} = useContext(SearchQuery)
    const [search, setSearch] = useState('');
    const [togglefav, setTogglefav] = useState(false);

    const handleSearch = () => {
        setSearchQuery(search);
        console.log(search);
    }
    const handleFav = () => {
            myFav.add(search.toLowerCase());
            console.log(myFav);
    }

    const ToggleFavourites = () => {
        setTogglefav(!togglefav);
    }

    const searchInput = (input) => {
        setSearch(input.target.value)

    }
    return (
        <div>
            <div className="SearchBar">
                <input type="search" placeholder="Search for cities..." id="searchbar" value={search}
                       onChange={searchInput}/>
                <input type="button" value="Search" id="SearchBtn" onClick={handleSearch}/>
                <label htmlFor="SearchBtn"></label>
                <input id="FavBtn" type="button" value="Favorite it!" onClick={handleFav}/>
                <button onClick={ToggleFavourites} id = "ToggleFav">
                    <div className="togFavorite">
                    {togglefav ? "Hide Favourites" : "Show Favourites"}
                        </div>
                    {togglefav && (
                        <div>
                            <h3>Favourite Searches:</h3>
                            <ul>
                                {Array.from(myFav).map((fav, index) => (
                                    <li key={index}>
                                        <button onClick={() => handleSearch(fav)} id="Favsearch" type ="button">{fav}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};


export default SearchBar;