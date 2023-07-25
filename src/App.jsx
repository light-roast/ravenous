import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import business from './components/hardcoreBusiness';
import yelp from '../src/utils/yelp';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('');
  const [sortingOption, setSortingOption] = useState('no');
  


  return (
    <>
      <header>
        <h1>ravenous</h1>
      </header>
      <SearchBar setSearchTerm={setSearchTerm} setLocation={setLocation} setSortingOption={setSortingOption}/>
      <BusinessList business={business}/>
    </>
  )
}

export default App
