import { useState } from "react";
import './searchBar.css'
export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortingOption, setSortingOption] = useState('');

    const handleSortOption = (sortOption) => {
        return;
        // Handle sort option logic here
        // You can update the state or perform any other actions based on the selected sort option
      };
  
    const handleSearch = (e) => {
      e.preventDefault();
      return;
      // Handle search logic here
      // You can make an API call to Yelp API with the search term and location
      // Use the formatting and naming conventions specified in the API documentation
    };

    return (
        <form>
            <div>
                <a onClick={() => handleSortOption('best_match')}><p>Best</p><p>Match</p></a>
                <a onClick={() => handleSortOption('rating')}><p>Highest</p><p>Rated</p></a>
                <a onClick={() => handleSortOption('review_count')}><p>Most</p><p>Reviewed</p></a>
                <hr></hr>
            </div>
            <input
                name="Business"
                type="text"
                placeholder="Search businesses"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input
                name="Location"
                type="text"
                placeholder="Where?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
             <button type="submit">Let's go</button>
        </form>
    );
}