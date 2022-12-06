
//css
import '../css/General.css';

//dispatch
import {useDispatch} from 'react-redux';

//useEffect
import React, { useState,useEffect } from 'react';

//axios
import axios from 'axios';
const MentorList =(props)=>{
    const dispatch=useDispatch();

    const onDeleteHandler=()=>{
        const confirmBox=window.confirm('WARNING: This will delete this mentor');
        if(confirmBox===true){
            axios.delete(`http://localhost:8080/api/v1/mentors/${props.id}`)
            .then(res =>{
                if( typeof res.data === 'object' ){
                    dispatch({
                        type:'DELETE_MENTOR',
                        payload:{id:props.id}
                    })
                }
            })
        }
    }

    
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>
                    <img 
                        src={props.image}
                        alt={props.firstName}
                    />
                </td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.position}</td>
                <td>{props.role}</td>
                <td>
                    <button 
                        className='action-buttons'
                        onClick={onDeleteHandler}
                        >DELETE</button>
                </td>
            </tr>
        </>
    )
}
export default MentorList;