import Business from './Business';
import business from './hardcoreBusiness';

export default function BusinessList(props) {
    return (
        <ul>
            {
                business.map((business) => {
                    return <li><Business business={business}/></li>
                })
            }
        </ul>
    );
};