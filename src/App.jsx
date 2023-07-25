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
  //Create the logic to modify state in order to import is as a prop on Businesslist


  return (
    <>
      <header>
        <h1>ravenous</h1>
      </header>
      <SearchBar />
      <BusinessList business={business}/>
    </>
  )
}

export default App
