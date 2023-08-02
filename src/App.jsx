import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import yelp from '../src/utils/yelp';
import { useState } from 'react';
import bis from './components/hardcoreBusiness';

function App() {
  const [fetchedResults, setFetchedResults] = useState([{id: 'key0'}]);
  


  function fetchResults(term, loc, sort) {
    const apiKey = import.meta.env.VITE_API_KEY;
    yelp(term, loc, sort, apiKey).then((results) => {
      setFetchedResults(results);
    });      
  }
  

  
  return (
    <>
      <header>
        <h1>ravenous</h1>
      </header>
      <SearchBar fetchResults={fetchResults}/>
      <BusinessList business={fetchedResults}/>
    </>
  )
}

export default App
