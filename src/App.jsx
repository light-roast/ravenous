import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import business from './components/hardcoreBusiness';
import yelp from '../src/utils/yelp';
import { useState } from 'react';

function App() {
  const [fetchedResults, setFetchedResults] = useState([{}]);
  


  function fetchResults(term, loc, sort) {
    const apiKey = process.env.VITE_API_KEY;
    //Solve process problem //Difference dev and product?
    setFetchedResults(yelp(term, loc, sort, apiKey));
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
