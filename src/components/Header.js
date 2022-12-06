//css
import '../css/Header.css';
//routerlink
import {Link} from 'react-router-dom';

const Header =()=>{
    return(
        <header>
                <div className='link-container'>
                    <Link 
                        className='login-link'
                        to='/login'>Login as Admin</Link> 
                </div>
        </header>
    )
}
export default Header;