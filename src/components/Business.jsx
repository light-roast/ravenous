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

const hardCoreBusiness = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};