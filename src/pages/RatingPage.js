import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
//component
import Navigation from '../components/Navigation';
import EvaluationSearchResult from '../components/EvaluationSearchResult.js';
import CalculatedResult from '../components/CalculatedResult';

//css
import '../css/General.css'
import '../css/RatingPage.css'

//downloadfeature
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
const RatingPage=()=>{

    //load all mentors
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

    //initiate data for evaluation on page load
    //initial load of data
    const evaluations=useSelector(state=>state.evaluations)
    console.log('dito ang data',evaluations)
    //const [data,setData]=useState([]);

    //load data for evaluations
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
    //initial load of data
    console.log('dito ang data2',evaluations)
    //state for search feature
    const [mentor, setMentor] = useState('');//state for searched dropdown mentor
    const [evaluationResults,setEvaluationResults]=useState(evaluations);
    const [calculatedAverage,setCalculatedAverage]=useState();
    
    // setEvaluationResults(evaluations);
    // console.log('evaluationresults',evaluationResults)


    //obtain data based on searched name
    const fetchData=async()=>{
        const results = await axios.get(`http://localhost:8080/api/v1/evaluations/${mentor}`);
        // console.log(results.data);
      console.log(results);
      setEvaluationResults(results.data)

        //put all averages in an array
        const obtainedAverageList=evaluationResults.map(average=>{
            return average.average
        })
        console.log('list of average',obtainedAverageList)
        console.log('length ng averagelist', obtainedAverageList.length)
        //calculate for the overall average of the searched person
        const overAllAverage=obtainedAverageList.reduce((prev,curr)=>{
             prev+=curr;
             console.log(obtainedAverageList)
             console.log(prev);
             return prev;
        })
        //set calculated average
        setCalculatedAverage((overAllAverage/obtainedAverageList.length).toFixed(2));
        console.log('this is the final average',calculatedAverage)
      }

    
    
//download function
const downloadFileDocument=()=>{
    //put here the id of the element you want to capture
    const input =document.getElementById('ratings-section-main');
    //setup canva
    html2canvas(input).then((canvas)=>{
        const imgData=canvas.toDataURL('image/png');
        const pdf=new jsPDF('p','pt','a3');
        pdf.addImage(imgData,'JPEG',0,0);
        pdf.save(`RatingDownloadCopy`);
    })
}

    return(
        <>
            <Navigation/>
            
                <h2>Calculate Ratings</h2>
        <section id='ratings-section-main'>

        
            <div className='ratings-populate-container'>
                <select value={mentor} 
                            onChange={(e)=>setMentor(e.target.value)}>
                            {mentors.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.firstName} {option.lastName} - {option.position}
                            </option>
                            ))}
                        </select>
                <button onClick={fetchData}>Populate</button>
            </div>
            {/* SEARCH RESULT SECTION */}
            <div className='evaluation-data-container'>

            
            <table className='mentor-table-evaluation'>
                <tr>
                    <th>Mentor</th>
                    <th>Evaluator</th>
                    <th>Average</th>
                </tr>
                {
                    evaluationResults.map(list=>{
                        return <EvaluationSearchResult
                            mentor={list.mentor}
                            evaluator={list.evaluator}
                            average={list.average}
                        />
                    })
                }
            </table>
            </div>
                {/* CALCULATED RESULT SECTION */}

            
            <CalculatedResult
                finalAverage={calculatedAverage}
            />
            
            <div className='download-rating-container'>
                <button className='download-rating'
                    onClick={downloadFileDocument}
                >
                    Download
                </button>
                
            </div>
             </section>
        </>
    )
}

export default RatingPage;