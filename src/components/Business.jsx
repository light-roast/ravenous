import './business.css';

export default function Business({business}) {
   if (!business.hasOwnProperty("name")) {
        return <article></article>;
    } else {
        return (
            <>
                <div className="cards">
                    <img src={business.imageSrc}/>
                    <h4 id="name">
                        {business.name}
                    </h4>
                    <div id="info">
                        <section className='left'>
                            <p>{business.address}</p>
                            <p>{business.city} </p>
                            <p>{business.state} {business.zipCode}</p>
                        </section>
                        <section className='right'>
                            <h4 className="category">
                                {business.category}
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
