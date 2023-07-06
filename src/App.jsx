import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import business from './components/hardcoreBusiness';

function App() {


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
