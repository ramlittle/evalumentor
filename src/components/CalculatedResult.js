import '../css/CalculatedResult.css'
const CalculatedResult=(props)=>{
    let rating='';
    let percentIncrease='';
    let color='';
    //determine rating here
    if(props.finalAverage>=95){
        rating='Perfectly Awesome! you have gained the maximum performance score';
        percentIncrease='10%';
        color='green'
    }else if(props.finalAverage >=90){
        rating='Congratulations, you have gained a nice increase on your Basic Pay this evaluation period!';
        percentIncrease='7%';
        color='yellow-green-color'
    }else if(props.finalAverage >=85){
        rating='Great, you have gained a Basic Pay increase this evaluation period!';
        percentIncrease='5%';
        color='orange-color';
    }else if(props.finalAverage >=80){
        rating='Good, you have gained a Basic Pay increase this evaluation period!';
        percentIncrease='3%';
        color='red-orange';
    }else{
        rating='Unfortunately, you did not perform well this evaluation period.';
        percentIncrease='0% increase on your Pay will be given';
        color='black-color';
    }
    return(
        <section className='rating-main-container'>
            <div className='rating-container'>
                <table className='rating-table'>
                    <tr>
                        <th>Rating</th>
                        <th>Suggested Salary Increase</th>
                    </tr>
                    <tr>
                        <td className='green-color'>95% and Above</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td className='yellow-green-color'>90% to 94%</td>
                        <td>7%</td>
                    </tr>
                    <tr>
                        <td className='orange-color'>85% to 89%</td>
                        <td>5%</td>
                    </tr>
                    <tr>
                        <td className='red-orange'>80% to 84%</td>
                        <td>3%</td>
                    </tr>
                    <tr>
                        <td className='black-color'>Below 80%</td>
                        <td>No Increase</td>
                    </tr>
                </table>
            </div>
            <div className='rating-summary-container'>
                <h3>Calculated Average</h3>
                <h3>{props.finalAverage}</h3>
                <br/>

                {/* Determine Salary Increase for this month */}
            
                <h3>{rating}</h3>
                <h3 
                    className={color}
                    >
                        <span className='rating-size'>{percentIncrease}</span>
                </h3>
            </div>
            
        </section>
    )
}

export default CalculatedResult;