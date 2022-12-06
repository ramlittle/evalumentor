import axios from 'axios';
import React,{useState} from 'react';

//css
import '../css/AddNewMentor.css';
//linkrouter
import {Link} from 'react-router-dom';
//components
import Navigation from './Navigation';
const AddNewMentor=()=>{

    const fetchData=async()=>{
        const results = await axios.get("http://localhost:8080/api/v1/evaluations");
        // console.log(results.data);
      console.log(results);
        const getAllPoints = results.data.map(result=>{
          console.log(result.points);
        })
        //get sum of points
        // const sumOfPoints = getAllPoints.reduce((prev,curr)=>{
        //     return prev;
        // })
      }
      const [firstName,setFirstName]=useState('');
      const [lastName,setLastName]=useState('');
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const [position,setPosition]=useState('');
      const [role,setRole]=useState('');
      const [error,setError]=useState('');
      const [imageUrl,setImageUrl]=useState('');
    
      const onSubmitHandler=async(e)=>{
        
        e.preventDefault();
        // alert('submit is clicked');
        //es6 syntax is used here because of async await, so no need to do ex firstName:firstName key value pair style
        const confirmBox=window.confirm('Hit OK if all is correct');
        if(confirmBox===true){
          const addMentor = await axios.post('http://localhost:8080/api/v1/mentors/register', {
          //here we do just the property then comma the next
          firstName,lastName,email,password,position,role,imageUrl
          })
          if(addMentor.error){
            setError(addMentor.error);
            alert(error);
          }else{
            alert('New Mentor Added');
            //clear form
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setPosition('');
            setRole('');
            setImageUrl('');
          }
        }
      }

      const onClearHandler=()=>{
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPosition('');
        setRole('');
        setImageUrl('');
      }
    
    return(
        <>
        <Navigation/>
        <h2>Add New Mentor</h2>
        <Link 
          className='return-button'
          to='/mentors'>
          Return
          </Link>
        {/* <button onClick={fetchData}>Press me</button> */}

      <div className='add-mentor-form-container'>

      
      <form 
        className='add-mentor-form'
        onSubmit={onSubmitHandler}>
        {error}
        <label for = 'firstName'>First Name:</label>
        <input type = 'text' 
          name = 'firstName' 
          placeholder = 'firstName'
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
          />
        <label for = 'lastName'>Last Name:</label>
        <input 
          type = 'text' 
          name = 'lastName' 
          placeholder = 'lastName'
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
          />
        <label for = 'email'>Email:</label>
        <input 
          type = 'email' 
          name = 'email' 
          placeholder = 'email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        <label for = 'password'>Password:</label>
        <input 
          type = 'password' 
          name = 'password' 
          placeholder = 'password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <label for = 'position'>Position:</label>
        <input 
          type = 'text' 
          name = 'position' 
          placeholder = 'position'
          value={position}
          onChange={(e)=>setPosition(e.target.value)}
          />
        <label for = 'role'>Role:</label>
        <input 
          type = 'text' 
          name = 'role' 
          placeholder = 'role'
          value={role}
          onChange={(e)=>setRole(e.target.value)}
          />
        <label for = 'imageUrl'>ImageUrl:</label>
        <input 
          type = 'text' 
          name = 'imageUrl' 
          placeholder = 'Image URL'
          value={imageUrl}
          onChange={(e)=>setImageUrl(e.target.value)}
          />
         
        <button 
          className='add-form-button'
          type = 'submit'
          >Submit</button>
      </form>
      <button
          className='add-form-button'
          onClick={onClearHandler}
        >Clear
      </button>
      </div>
        </>
    )
}

export default AddNewMentor;