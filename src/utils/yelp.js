export default async function yelp(searchTerm, location, sortOption, api_key){
    const key = `Bearer ${api_key}`;
    const urlWithSort = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${searchTerm}&sort_by=${sortOption}`;
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${searchTerm}`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: key
        }
      };
    try {
        let response;
        if (sortOption === 'no') {
            response = await fetch(url, options);
        } else {
            response = await fetch(urlWithSort, options);
        }
        if (response.ok) {
            const jsonResponse = await response.json();
            if (jsonResponse.businesses) {
                    let returnInfo = await jsonResponse.businesses;
                    return returnInfo;
                }
                
    
            }
            throw new Error ('Request failed'); 
        }         
    
    catch(error) {
        console.log(error);
    }
  
}
