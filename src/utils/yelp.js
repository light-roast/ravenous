export default async function yelp(searchTerm, location, sortOption, api_key) {
    const baseUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;
    const url = `${baseUrl}?location=${location}&term=${searchTerm}`;
    const urlWithSort = `${baseUrl}?location=${location}&term=${searchTerm}&sort_by=${sortOption}`;
  
    const options = {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': api_key
      },
    };
  
    try {
      const response = await fetch(sortOption === 'no' ? url : urlWithSort, options);
      const data = await response.json();
      
      if (data.businesses && Array.isArray(data.businesses) && data.businesses.length > 0) {
        return data.businesses;
      } else {
        
        return [];
      }
    } catch (err) {
      // Log and handle the error appropriately
      console.error('Failed to fetch data from Yelp API:', err);
      throw new Error('Failed to fetch data from Yelp API');
    }
  }
  

    