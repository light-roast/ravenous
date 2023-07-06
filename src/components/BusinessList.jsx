import Business from './Business';
import './businessList.css';


export default function BusinessList(props) {
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