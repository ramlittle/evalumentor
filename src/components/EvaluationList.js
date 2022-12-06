
const EvaluationList =(props)=>{
    return(
        <>
            <tr>
                <td>{props.dateSubmitted}</td>
                <td>{props.mentor}</td>
                <td>{props.evaluator}</td>
                <td>{props.average}</td>
            </tr>
        </>
    )
}

export default EvaluationList;
