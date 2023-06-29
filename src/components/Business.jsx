export default function Business(props) {
    return (
        <>
            <article>
                <img src={props.business.imageSrc}/>
                <h4>
                    {props.business.name}
                </h4>
                <section>
                    <p>{props.business.address}</p>
                    <p>{props.business.city}</p>
                    <p>{props.business.state} {props.business.zipCode}</p>
                </section>
                <section>
                    <h4>
                        {props.business.category}
                    </h4>
                    <h5>
                        {props.business.rating}
                    </h5>
                    <p>{props.business.reviewCount}</p>

                </section>

            </article>
        </>
    )
}
