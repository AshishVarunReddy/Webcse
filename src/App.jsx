import { useState } from 'react'
import './App.css'
import CurrTemp from "./CurrTemp.jsx";
import SearchBar from "./SearchBar.jsx";
import DnD from "./DnD.jsx";
import ForecastLayout from "./ForecastLayout.jsx";
import {SearchProvider} from "./SearchQuery.jsx";
function App() {


  return (
    <>

        <SearchProvider>
            <SearchBar ></SearchBar>
            <DnD />
            <CurrTemp />
        </SearchProvider>


      <ForecastLayout></ForecastLayout>
    </>
  )
}

export default App
