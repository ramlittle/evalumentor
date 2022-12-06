//images
import EvalumentorLogo from '../images/evalumentorlogo.png';
//css
import '../css/LoginPage.css';
//link router
import {Link} from 'react-router-dom';
const LoginPage=()=>{
    return(
        <section className='login-page'>
            <section className='logo-section'>
                <div className='logo-tag-line'>
                    Evaluate Your Mentor
                </div>
                <div>
                    <img 
                        className='evalumentor-logo'
                        src= {EvalumentorLogo}/>
                </div>
                <Link 
                    className='evaluate-link'
                    to='/'>Return
                </Link>
                </section>
            <section className='login-section'>
                {/* Don't Know how to make login form work so link  */}
                <div className='login-form'>
                    <label for ='email'>Email:</label>
                    
                    <input 
                        type = 'email'
                        name = 'email'
                        placeholder='email@example.com'/>
                    
                    <label for ='password'>Password:</label>
                    
                    <input 
                        type = 'password'
                        name='password'
                        placeholder='enter password here'/>
                    <Link
                        className='login-button'
                        to='/admin'
                    >Login
                    </Link>
                </div>
                
            </section>
        </section>
    )
}

export default LoginPage;