//db con
import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';

//component
import Navigation from '../components/Navigation';
import EvaluationList from '../components/EvaluationList.js';
//css
import '../css/General.css'
import '../css/EvaluationPage.css';
const EvaluationPage=()=>{

    //initial load of data
    const evaluations=useSelector(state=>state.evaluations)
    console.log('dito ang data',evaluations)
    //const [data,setData]=useState([]);

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

    
    
    return(
        <>
            <Navigation/>
            <h2>Evaluations</h2>
            <div className='evaluations-container'>

            
            <table>
                <tr>
                    <th>Date Submitted</th>
                    <th>Mentor</th>
                    <th>Evaluator</th>
                    <th>Average</th>
                </tr>
                {
                    evaluations.slice(0).reverse().map(list=>{
                        return <EvaluationList  
                                key={list._id}
                                id={list._id}
                                mentor={list.mentor}
                                evaluator={list.evaluator}
                                average={list.average}
                                dateSubmitted={list.dateSubmitted}
                                />
                        })
                }
            </table>
            </div>
        </>
    )
}

export default EvaluationPage;