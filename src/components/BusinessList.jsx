import Business from './Business';
import './businessList.css';


export default function BusinessList(props) {

    if (!Array.isArray(props.business)) {
        return <p>fetched failed...</p>; 
      } else {
        return (
            <ul>
                {
                    props.business.map((business, i) => {
                        return <li><Business key={'business' + i} business={business}/></li>
                    })
                }
            </ul>
        );
      }
    
}