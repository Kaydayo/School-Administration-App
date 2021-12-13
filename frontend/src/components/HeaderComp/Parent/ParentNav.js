import FMS from '../../../assets/images/FMS.png'
import {BsChatSquareQuoteFill} from 'react-icons/bs';
import {CgNotes} from 'react-icons/cg';
import {FiSettings} from 'react-icons/fi';
import {CgLogOut} from 'react-icons/cg';

const ParentNav = () => {
    return (
        <div className="Navs">
            <div>
                <img id="logo" src={FMS} alt="" />
                <h3>FMS ACADEMY</h3>
            </div>
            <p><BsChatSquareQuoteFill/> Chats</p>
            <ParentDB />
            <p><CgNotes/> Result</p>
            <p><FiSettings/> Settings</p>
            <p><CgLogOut/> Logout</p>
        </div>
    )
}

export default ParentNav


