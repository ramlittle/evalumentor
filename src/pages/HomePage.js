
//css
import '../css/General.css';
import '../css/HomePage.css';
//images
import EvalumentorLogo from '../images/evalumentorlogo.png';

//routerlink
import {Link} from 'react-router-dom';

//pages
import AboutPage from './AboutPage.js';

const HomePage =(props)=>{
    return(
        <section className='homepage-body'>
            <div className='logo-tag-line'>
                Evaluate Your Mentor
            </div>
            <div>
                <img 
                    className='evalumentor-logo'
                    src= {EvalumentorLogo}/>
            </div>
            <div className='homepage-buttons-container'>
                <Link
                    title='evaluate a mentor' 
                    className='evaluate-link'
                    to='/evaluate' >Evaluate
                </Link>
                <Link 
                    title='login as admin'
                    className='evaluate-link'
                    to='/login' >Login
                </Link>
            </div>
                
            
        </section>
    )
}

export default HomePage;
