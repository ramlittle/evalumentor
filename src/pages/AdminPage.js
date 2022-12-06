//db con
import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
//images
import PersonImage from '../images/man.png';
import TeamLead from '../images/teamlead.png';


//component
import Navigation from '../components/Navigation';

//css 
import '../css/AdminPage.css';
const AdminPage=()=>{

    //initial load of data
    const evaluations=useSelector(state=>state.evaluations)
    console.log('dito ang data',evaluations)
    const dispatch=useDispatch();
    useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/evaluations')
        .then(res =>{
        //   setData(res.data);
        //dispatch the data into reducer
        dispatch({type:"POPULATE_EVALUATIONS",payload:{evaluations:res.data}})
        })
        .catch(err =>{
        console.log('error daw',err);
        })
    }, [])//initial load display only, if [] is not here, it will not stop displaying on console.
    console.log('loaded evaluations',evaluations)
    
    return(
        <section className='dashboard-body'>
            <Navigation/>
            {/* User Info Section */}
            <section className='dashboard-container'>
                <section className='hero-container'>
                    <div className='greeting-container'>
                            <h2>Welcome, Ram</h2>
                    </div> 
                    <div className='hero-welcome-message-container'>
                        <div className='hero-img-container'>
                            <img 
                                src={PersonImage}
                                title="person icons" alt='Person icons created by Freepik - Flaticon'/>
                        </div>
                    </div>
                    <div className='hero-details-container'>
                        <div className='name-container'>
                            <div>Complete Name: </div>
                            <div>Ramelito Martinez</div>
                        </div>
                        <div className='email-container'>
                            <div>Email: </div>
                            <div>ramelitomartinez@gmail.com</div>
                        </div>
                    </div>
                </section>
                <section className='evaluation-details'>
                    <div>Total Evaluations Submitted</div>
                    <div className='evaluation-count'>{evaluations.length}</div>
                </section>
                
             
            
            </section>
            
        </section>

    )
}

export default AdminPage;