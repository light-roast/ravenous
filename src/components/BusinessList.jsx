import Business from './Business';
import './businessList.css';


export default function BusinessList(props) {

    if (!Array.isArray(props.business)) {
        return <p>fetched failed...</p>; 
      } else {
        return (
            <section id="mainSection">
                {
                    props.business.map((business) => {
                        return <Business key={business.id}  business={business}/>
                    })
                }
            </section>
        );
      }
    
}