import './business.css';

export default function Business({business}) {
   if (!business.hasOwnProperty("name")) {
        return <article></article>;
    } else {
        return (
            <>
                <div className="cards">
                    <div className='image-container'>
                        <img src={business.image_url}/>
                    </div>
                    <h4 id="name">
                        {business.name}
                    </h4>
                    <div id="info">
                        <section className='left'>
                            <p>{business.location.address1}</p>
                            <p>{business.location.city} </p>
                            <p>{business.location.state} {business.location.zipCode}</p>
                        </section>
                        <section className='right'>
                            <h4 className="category">
                                {business.categories[0].title}
                            </h4>
                            <h5 className="category">
                                {business.rating} stars
                            </h5>
                            <p>{business.reviewCount} reviews</p>

                        </section>
                    </div>
                </div>
            </>
        )}
}
