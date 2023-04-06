import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Card(props){
    return (
        <div className='card'>
            <img src={props.item.imageLink} className='card--image' alt='' />
            <div className='card--des'>
            <div className='card--header'>
            <FontAwesomeIcon icon={faLocationDot} className='card--logo'/>
            <p>{props.item.location}</p>
            <a href = {props.item.mapLink} className='card--link' >View on google maps</a>
            </div>
            <div className='card--title bold'>{props.item.title}</div>
            <div className='card--dates bold'>{props.item.startDate} - {props.item.endDate}</div>
            <p className='card--text'>{props.item.description}</p>
            </div>
        </div>
    );
}
