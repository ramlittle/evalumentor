import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';

//component
import MentorList from '../components/MentorList';
import Navigation from '../components/Navigation.js';

//router link
import {Link} from 'react-router-dom';
//css
import '../css/General.css'
import '../css/MentorsPage.css';
const MentorsPage =()=>{
    
    //initial load of data
    const mentors=useSelector(state=>state.mentors)
    console.log('dito ang data',mentors)
    //const [data,setData]=useState([]);

    const dispatch=useDispatch();
    useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/mentors')
        .then(res =>{
        //   setData(res.data);
        //dispatch the data into reducer
        dispatch({type:"POPULATE_MENTORS",payload:{mentors:res.data}})
        })
        .catch(err =>{
        console.log('error daw',err);
        })
    }, [])//initial load display only, if [] is not here, it will not stop displaying on console.

  console.log('data dito',mentors);
    return(
        <>
            <Navigation />
            <h2>Mentors</h2>
            
            <div className='table-container'>
            <table>
                <tr>
                    <th>ID</th>
                    <th>IMAGE</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>POSITION</th>
                    <th>ROLE</th>
                    <th>
                        ACTION
                        <Link
                            className='add-mentor-button'
                            to='/addMentor'
                        >ADD
                        </Link>
                    </th>
                </tr>
                {
                    mentors.slice(0).reverse().map(list=>{
                    return <MentorList  
                            key={list._id}
                            id={list._id}
                            image={list.imageUrl}
                            firstName={list.firstName}
                            lastName={list.lastName}
                            position={list.position}
                            role={list.role}
                            />
                    })
                }
             </table>
            </div>
            
        </>
    )
}

export default MentorsPage;