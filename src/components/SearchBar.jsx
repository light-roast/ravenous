import { useEffect, useState } from "react";
import './searchBar.css'
export default function SearchBar({fetchResults}) {
    const [activeLink, setActiveLink] = useState(false);
    const [sortingOption, setSortingOption] = useState('no');
    const [searchTerm, setSearchTeme] = useState('');
    const [location, setLocation] = useState('');

    //move this to App.jsx
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchResults(searchTerm, location, sortingOption);

    }
    
    const handleCLick = (sortOption) =>  {
        if (!activeLink) {
            setActiveLink(sortOption);
            setSortingOption(sortOption);
        } else if (activeLink !== sortOption) {
            setActiveLink(sortOption);
            setSortingOption(sortOption);
        } else {
            setActiveLink(false);
            setSortingOption('no');
        }
    }

    const handleSortOption = (sortOption) => {
        setActiveLink(sortOption);
       
          };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <a onClick={() => handleCLick('best_match')} className={activeLink === 'best_match'? 'active': ''}><p>Best</p><p>Match</p></a>
                <a onClick={() => handleCLick('rating')} className={activeLink === 'rating'? 'active': ''}><p>Highest</p><p>Rated</p></a>
                <a onClick={() => handleCLick('review_count')} className={activeLink === 'review_count'? 'active': ''}><p>Most</p><p>Reviewed</p></a>
                <hr></hr>
            </div>
            <input
                type="text"
                placeholder="Search businesses"
                value={searchTerm}
                onChange={(e) => setSearchTeme(e.target.value)}
            />
            <input
                type="text"
                placeholder="Where?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
             <button type="submit">Let's Go</button>
        </form>
    );
}