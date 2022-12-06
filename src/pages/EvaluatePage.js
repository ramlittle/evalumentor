//The below components is needed to populate data
import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';

//images
import EvalumentorLogo from '../images/evalumentorlogo.png';

//css
import '../css/EvaluatePage.css';
import '../css/General.css';
const EvaluatePage=()=> {
    //initial load of data
    //get all mentors
    const dispatch=useDispatch();
    useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/mentors')
        .then(res =>{
        //   setData(res.data);
        //dispatch the data into reducer
        dispatch({type:"POPULATE_MENTORS",payload:{mentors:res.data}})
        })
        .catch(err =>{
        console.log('error',err);
        })
    }, [])//initial load display only, if [] is not here, it will not stop displaying on console.
    const mentors=useSelector(state=>state.mentors)
    console.log('dito', mentors)


    //values entered by user
    const [mentor, setMentor] = useState('');
    const [evaluator,setEvaluator]=useState('');
    const [t1q1,setT1q1]=useState(Number);
    const [t1q2,setT1q2]=useState();
    const [t1q3,setT1q3]=useState();
    const [t2q1,setT2q1]=useState();
    const [t2q2,setT2q2]=useState();
    const [t2q3,setT2q3]=useState();
    const [t3q1,setT3q1]=useState();
    const [t3q2,setT3q2]=useState();
    const [t3q3,setT3q3]=useState();
    const [t4q1,setT4q1]=useState();
    const [t4q2,setT4q2]=useState();
    const [t4q3,setT4q3]=useState();
    const [average,setAverage]=useState();
    const [error,setError]=useState('');

    //on average calculation
    const onAverageChangeHandler=()=>{
        //calculate average of user answer and convert to percentage
        setAverage(
            (((t1q1+t1q2+t1q3+
            t2q1+t2q2+t2q3+
            t3q1+t3q2+t3q3+
            t4q1+t4q2+t4q3)/12)*10).toFixed(2)
        );
        console.log('type of average',typeof average);
        console.log('average',average);
    }
    //submit button for evaluation
    const onSubmitHandler=async(e)=>{
        
        e.preventDefault();
        // alert('submit is clicked');
        //es6 syntax is used here because of async await, so no need to do ex firstName:firstName key value pair style
        const confirmBox=window.confirm('Hit OK if all is done');
        if(confirmBox===true){
          const addEvaluation = await axios.post('http://localhost:8080/api/v1/evaluations/addevaluation', {
          //here we do just the property then comma the next
        //   firstName,lastName,email,password,position,role,imageUrl
        mentor,evaluator,
        t1q1,t1q2,t1q3,
        t2q1,t2q2,t2q3,
        t3q1,t3q2,t3q3,
        t4q1,t4q2,t4q3,
        average
          })
          
          if(addEvaluation.error){
            setError(addEvaluation.error);
            alert(error);
          }else{
            alert('Evaluation Added');
          }
        }
      }
    return(
        <>
            <div className='evalumentor-logo-container'>
                <img src={EvalumentorLogo}/>
            </div>
            <div className='evaluate-form-container'>
                <form 
                    className='evaluate-form'
                    onSubmit={onSubmitHandler}
                    >
                    <div className='evaluation-information-container'>

                    
                    <label for ='evaluatee'>Mentor: </label>
                    <select 
                        
                        
                        value={mentor} 
                        onChange={(e)=>setMentor(e.target.value)}>
                        {mentors.map(option => (
                        <option key={option.id} value={option.id}>
                            {option.firstName} {option.lastName} - {option.position}
                        </option>
                        ))}
                    </select>
                    
                    <label for ='evaluatedBy'>Evaluated By:</label>
                    <input 
                        type='text' 
                        placeholder='name is optional'
                        value={evaluator}
                        onChange={(e)=>setEvaluator(e.target.value)}
                        />
                    </div>
                    <div className='initiative-section'>
                        <h3>Initiative</h3>
                        <table>
                            {/* T1Q1 */}
                            <tr>
                                <td>Does things without being told</td>
                                <td>
                                    <select value={t1q1} 
                                        onChange={(e)=>setT1q1(Number(e.target.value))}>
                                        <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                            {/* T1Q2 */}
                            <tr>
                                <td>Finds out what you need to know</td>
                                <td>
                                    <select value={t1q2} 
                                        onChange={(e)=>setT1q2(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                            {/* T1Q3 */}
                            <tr>
                                <td>Still keeps going when things get tough</td>
                                <td>
                                    <select value={t1q3} 
                                        onChange={(e)=>setT1q3(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>

                    {/* TRAIT 2 */}
                    <div className='time-management-section'>
                    <h3>Time Management</h3>
                        <table>
                            {/* T2Q1 */}
                            <tr>
                                <td>Meets deadline</td>
                                <td>
                                    <select value={t2q1} 
                                        onChange={(e)=>setT2q1(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                            {/* T2Q2 */}
                            <tr>
                                <td>Has effective prioritizing strategies</td>
                                <td>
                                    <select value={t2q2} 
                                        onChange={(e)=>setT2q2(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                            {/* T2Q3 */}
                            <tr>
                                <td>Maintains focus</td>
                                <td>
                                    <select value={t2q3} 
                                        onChange={(e)=>setT2q3(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>

{/* TRAIT 3 */}


<div className='responsibility-section'>
                    <h3>Responsibility</h3>
                        <table>
                            {/* T3Q1 */}
                            <tr>
                                <td>The person is trustworthy</td>
                                <td>
                                    <select value={t3q1} 
                                        onChange={(e)=>setT3q1(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                            {/* T3Q2 */}
                            <tr>
                                <td>Treats others faily</td>
                                <td>
                                    <select value={t3q2} 
                                        onChange={(e)=>setT3q2(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                            {/* T3Q3 */}
                            <tr>
                                <td>Makes the right decision</td>
                                <td>
                                    <select value={t3q3} 
                                        onChange={(e)=>setT3q3(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>

{/* TRAIT 4 */}

<div className='creativity-section'>
                    <h3>Creativity And Resourcefulness</h3>
                        <table>
                            {/* T4Q1 */}
                            <tr>
                                <td>Builds strong professional networks</td>
                                <td>
                                    <select value={t4q1} 
                                        onChange={(e)=>setT4q1(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                            {/* T4Q2 */}
                            <tr>
                                <td>Continuesly learning</td>
                                <td>
                                    <select value={t4q2} 
                                        onChange={(e)=>setT4q2(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                            {/* T4Q3 */}
                            <tr>
                                <td>Able to create solutions to challenging situations</td>
                                <td>
                                    <select value={t4q3} 
                                        onChange={(e)=>setT4q3(Number(e.target.value))}>
                                            <option>SELECT</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='average-result-container'>
                        <input 
                            type='Number'
                            placeholder='Result Here'
                            value={average}
                            // onChange={(e)=>setAverage(Number(e.target.value))}/>
                            onChange={onAverageChangeHandler}/>
                    </div>
                    <button 
                        className='add-form-button'
                        type = 'submit'
                        >Submit</button>
                </form>
            </div>
        </>
    )
}

export default EvaluatePage;