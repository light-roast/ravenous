import Business from './Business';
import business from './hardcoreBusiness';
import './businessList.css';

export default function BusinessList(props) {
    return (
        <ul>
            {
                business.map((business, i) => {
                    return <li><Business key={'business' + i} business={business}/></li>
                })
            }
        </ul>
    );
}