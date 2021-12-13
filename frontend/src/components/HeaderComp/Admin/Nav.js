import FMS from '../../../assets/images/FMS.png'
import Database from './Database'
import {BsChatSquareQuoteFill} from 'react-icons/bs';
import {FiDatabase} from 'react-icons/fi';
import {CgNotes} from 'react-icons/cg';
import {FiSettings} from 'react-icons/fi';
import {CgLogOut} from 'react-icons/cg'

const Nav = () => {
    
    return (
        <div className="Navs">
            <div>
                <img id="logo" src={FMS} alt="" />
                <h3>FMS ACADEMY</h3>
            </div>
            <div><input type="search" name="" id="search-box" placeholder='🔍 search'  /></div>
            <p><BsChatSquareQuoteFill/> Chats</p>
            <p onClick={(e)=>e.target.nextSibling.style.display === 'none'?e.target.nextSibling.style.display = 'block':e.target.nextSibling.style.display = 'none'}><FiDatabase/> Database </p>
            <Database />
            <p><CgNotes/> Result</p>
            <p><FiSettings/> Settings</p>
            <p><CgLogOut/> Logout</p>
        </div>
    )
}

export default Nav
