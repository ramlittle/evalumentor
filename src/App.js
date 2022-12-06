//Routing
import {Routes,Route} from 'react-router';

//pages
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import LoginPage from './pages/LoginPage.js';
import AdminPage from './pages/AdminPage.js';
import MentorsPage from './pages/MentorsPage.js';
import EvaluationPage from './pages/EvaluationPage.js';
import RatingPage from './pages/RatingPage.js';
import EvaluatePage from './pages/EvaluatePage.js';
//components
import Footer from './components/Footer';
import AddNewMentor from './components/AddNewMentor.js';

 
const App =()=>{
    return(
    <body>
      <Routes>
        <Route 
          path='/' 
          element={
            <HomePage
              />
          }
        />
       
        <Route  
          path='/about'
          element={
            <AboutPage/>
          }
        />
        <Route  
          path='/login'
          element={
            <LoginPage/>
          }
        />
        <Route  
          path='/admin'
          element={
            <AdminPage/>
          }
        />
        <Route  
          path='/mentors'
          element={
            <MentorsPage/>
          }
        />
        <Route  
          path='/evaluations'
          element={
            <EvaluationPage/>
          }
        />
        <Route  
          path='/ratings'
          element={
            <RatingPage/>
          }
        />
        <Route  
          path='/addMentor'
          element={
            <AddNewMentor/>
          }
        />
        
        {/* User section */}
        <Route  
          path='/evaluate'
          element={
            <EvaluatePage/>
          }
        />
      </Routes>
       <Footer/> 
    </body>
  )
}
 
export default App;
