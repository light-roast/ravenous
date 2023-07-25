import { useEffect, useState } from "react";
import './searchBar.css'
export default function SearchBar({setSearchTerm, setLocation, setSortingOption}) {
    const [activeLink, setActiveLink] = useState(false);
    const [searchTerm, setSearchTeme] = useState('');

       const handleSubmit = (e) => {
        e.preventDefault();
        }
    
    const handleCLick = (sortOption) =>  {
        if (!activeLink) {
            setActiveLink(sortOption);
            setSortingOption(activeLink);
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
                onChange={(e) => setSearchTerm(e.target.value)}
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