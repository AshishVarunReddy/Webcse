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


    const favClick = (fav) => {
        setSearchQuery(fav);
        console.log(fav);
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

                <div className="favorites-container" >
                    <button onClick={ToggleFavourites} id = "ToggleFav" className="toggle-block">{togglefav ? "Hide Favourites" : "Show Favourites"}</button>
                    {togglefav && (
                        <div className= "favorites-block" >

                            <ul>
                                {Array.from(myFav).map((fav, index) => (
                                    <li key={index}>
                                        <button onClick={() => favClick(fav)} id="Favsearch" type ="button" className= "bg-blue-300">{fav}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};


export default SearchBar;