async function yelp(searchTerm, location, sortOption, api_key){
    const key = `Bearer ${api_key}`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: key
        }
      };
    try {
        if (sortOption === 'no') {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${searchTerm}`, options);
            if (response.ok) {
                const jsonResponse = await response.json();
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                      }));
                }
                
    
            }
            throw new Error ('Request failed'); 
        } else {
            const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&term=${searchTerm}&sort_by=${sortOption}`, options);
        if (response.ok) {
            const jsonResponse = await response.json();
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                  }));
            }
            console.log("props.business:", jsonResponse.business);
            

        }
        throw new Error ('Request failed');
        }
        
    }
    catch(error) {
        console.log(error);
    }
  }
 
  export default yelp;