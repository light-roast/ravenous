import { useEffect, useState } from "react";
import './searchBar.css'
export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortingOption, setSortingOption] = useState('no sorting option');
    const [activeLink, setActiveLink] = useState(false);

    useEffect(() => {
        if (activeLink) {
            setSortingOption(activeLink);
        }
    }, [activeLink])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Searching Yelp with ${searchTerm}, ${location}, ${sortingOption}`);
    }


    const handleSortOption = (sortOption) => {
        setActiveLink(sortOption);
          };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <a onClick={() => handleSortOption('best_match')} className={activeLink === 'best_match'? 'active': ''}><p>Best</p><p>Match</p></a>
                <a onClick={() => handleSortOption('rating')} className={activeLink === 'rating'? 'active': ''}><p>Highest</p><p>Rated</p></a>
                <a onClick={() => handleSortOption('review_count')} className={activeLink === 'review_count'? 'active': ''}><p>Most</p><p>Reviewed</p></a>
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