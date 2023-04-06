import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return (
        <div className='header'>
            <FontAwesomeIcon icon={faEarth} />
            <p>  My travel journel</p>
        </div>
    );
}