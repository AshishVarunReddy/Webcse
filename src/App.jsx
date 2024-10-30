import { useState } from 'react'
import './App.css'
import CurrTemp from "./CurrTemp.jsx";
import SearchBar from "./SearchBar.jsx";
import DnD from "./DnD.jsx";
import ForecastLayout from "./ForecastLayout.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DnD />
    <CurrTemp />
      <SearchBar></SearchBar>
      <ForecastLayout></ForecastLayout>
    </>
  )
}

export default App
