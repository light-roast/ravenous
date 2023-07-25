import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import business from './components/hardcoreBusiness';
import yelp from '../src/utils/yelp';
import { useState } from 'react';

function App() {
  //Add logic to store separate search values in order to fetch after handlesubmit
  return (
    <>
      <header>
        <h1>ravenous</h1>
      </header>
      <SearchBar/>
      <BusinessList business={business}/>
    </>
  )
}

export default App
