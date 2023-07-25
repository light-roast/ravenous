const key = "Bearer Mn9yza2R9TXDT4daolkizWR7h9WTRJPqdeW4ylfmxbMe9jpKbEmaIamW5cizEC1W4eTxVDwcO-GSh8N3sBZyzc8Dk7FbfC1XnZK-8vvR7djtdo0fpHBfL-Lgxt6_ZHYx";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: key
    }
  };
  async function yelp(searchTerm, location, sortOption){
    try {
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
            

        }
        throw new Error ('Request failed');
    }
    catch(error) {
        console.log(error);
    }
  }
 
  export default yelp;