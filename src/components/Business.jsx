import './business.css';

export default function Business(props) {
   if (!props.hasOwnProperty("name")) {
        return <article></article>;
    } else {
        return (
            <>
                <article>
                    <img src={props.business.imageSrc}/>
                    <h4>
                        {props.business.name}
                    </h4>
                    <div id="info">
                        <section className='left'>
                            <p>{props.business.address}</p>
                            <p>{props.business.city}</p>
                            <p>{props.business.state} {props.business.zipCode}</p>
                        </section>
                        <section className='right'>
                            <h4 className="category">
                                {props.business.category}
                            </h4>
                            <h5 className="category">
                                {props.business.rating}
                            </h5>
                            <p>{props.business.reviewCount} reviews</p>

                        </section>
                    </div>
                </article>
            </>
        )}
}
