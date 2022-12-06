//css
import '../css/Navigation.css';
//images
import NavigationLogo from '../images/evalumentorlogo.png';
//routerlink
import {Link} from 'react-router-dom';


const Navigation =()=>{
    return(
        <section className='navigation-container'>
            <div className='navigation-logo-container'>
                <Link to='/admin'>
                <img 
                    className='navigation-logo'
                    src={NavigationLogo}/>
                </Link>
            </div>
            <div className='navigation-links-container'>
                <ul className='links-container'>
                    <li>
                        <Link 
                            className='nav-links'
                            to='/mentors'>
                            Mentors
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className='nav-links'
                            to='/evaluations'>
                            Evaluations
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className='nav-links'
                            to='/ratings'>
                            Ratings
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className='nav-links'
                            to='/evaluate'>
                            Evaluate
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Navigation;