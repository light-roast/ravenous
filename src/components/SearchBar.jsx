export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortingOption, setSortingOption] = useState('');

    const handleSortOption = (sortOption) => {
        // Handle sort option logic here
        // You can update the state or perform any other actions based on the selected sort option
      };
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Handle search logic here
      // You can make an API call to Yelp API with the search term and location
      // Use the formatting and naming conventions specified in the API documentation
    };

    return (
        <form>
            <a onClick={() => handleSortOption('best_match')}>Best Match</a>
            <a onClick={() => handleSortOption('rating')}>Highest Rated</a>
            <a onClick={() => handleSortOption('review_count')}>Most Reviewed</a>
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
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
             <button type="submit">Search</button>
        </form>
    );
}