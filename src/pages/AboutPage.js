//image
import RamImage from '../images/ram.png';
const AboutPage =()=>{
    return(
        <section className='about-container'>
            <div className='about-header'>
                <h2>About</h2>
            </div>
            <div className='about-message-container'>
                    <div className='about-message-image'>
                    <small>
                        <a 
                            href='https://www.istockphoto.com/portfolio/illusart?mediatype=illustration'
                            title='Creator: illusart | Credit: Getty Images/iStockphoto'
                            target='_blank'
                            >
                            Creator: illusart | Credit: Getty Images/iStockphoto
                        </a>
                    </small>
                    </div>
                    
                    <div>
                        <span>
                            <h3>Contacts Master</h3>
                        </span>
                    </div>
            </div>
            <div className='constructed-by'>
                <h6>Author: </h6>
                <span>Ram Little</span>
                <img src = {RamImage} alt='ram picture'/>
            </div>

            <div className='project-details'>

                <h4>Project Details</h4>
                <table>
                    <tbody>
                        {/* Header */}
                        <tr>
                            <th>DAY</th>
                            <th>ACTIVITY</th>
                        </tr>
                        {/* Day 1 */}
                        <tr>
                            <td>1</td>
                            <td>
                            Create wireframe <br/>
                            Plot Schedule of activities<br/>
                            Research feasibility of functions/features<br/>
                            Setup redux,<br/>
                            Create JSON file for sample contacts<br/>
                            Create home page<br/>
                            </td>
                        </tr>
                        {/* Day 2 */}
                        <tr>
                            <td>2</td>
                            <td>
                            Make basic functionalities work such as buttons<br/>
ADD
 INTERESTED
 DNC<br/>
 NI<br/>
CALL BACK<br/>
Make Validations work for inputs <br/>
    Should not be empty <br/>
phone    No duplicates <br/>
    Phone when accepted should remove special characters <br/>
Alert user, if to mark a contact as do not call<br/>
Alert user when restoring to warn, that contacts marked to do not call may file a a lawsuit if persistent on calling them.<br/>

Make Home Page dashboard totalling work<br/>
Put total of contact on each page work<br/>
Make SEARCH FEATURE WORK<br/>
    Make basic validation for search work<br/>
Make email feature work<br/>
Separate into components the following:<br/>
    New contacts<br/>
    Interested<br/>
    Not Interested <br/>
    Call Back<br/>
    Do not Call <br/>


                            </td>
                        </tr>
                        {/* Day 3 */}
                        <tr>
                            <td>3</td>
                            <td>
                            Rest<br/>
Continue Pending on #2 <br/>
Try to make nice to have features work ,search, email, download<br/>
Make Navigation submenus work<br/>

                            </td>
                        </tr>
                        {/* Day 4 */}
                        <tr>
                            <td>4</td>
                            <td>
                            Setup routing<br/>
Setup initial design<br/>
Make routing work for pages:<br/>
    New contacts <br/>
    Do not call <br/>
    Not interested <br/>
    Interested <br/>
    Call back <br/>
                            </td>
                            </tr>
                        {/* Day 5 */}
                        <tr>
                            <td>5</td>
                            <td>
                            Make download feature work <br/>
Design download page DONE<br/>

                            </td>
                        </tr>
                        {/* Day 6 */}
                        <tr>
                            <td>6</td>
                            <td>
                            Create a login page<br/>
                            Create an about page<br/>
                            </td>
                        </tr>
                        {/* Day 7 */}
                        <tr>
                            <td>7</td>
                            <td>
                            Rest<br/>
Try to upload online the app<br/>
Design Mobile and Tablet Responsiveness<br/>
Prepare presentation Details and Demo<br/>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    )
}
export default AboutPage;
