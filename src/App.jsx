import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import yelp from '../src/utils/yelp';
import { useState } from 'react';
import bis from './components/hardcoreBusiness';
//Escuchar audios de Silva
function App() {
  const [fetchedResults, setFetchedResults] = useState([{id: 'key0'}]);
  


  function fetchResults(term, loc, sort) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const results = yelp(term, loc, sort, apiKey);
    setFetchedResults(results);
    
  }
  

  
  return (
    <>
      <header>
        <h1>ravenous</h1>
      </header>
      <SearchBar fetchResults={fetchResults}/>
      <BusinessList business={bis}/>
    </>
  )
}

export default App
