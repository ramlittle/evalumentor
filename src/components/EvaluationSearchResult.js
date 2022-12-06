const EvaluationSearchResult =(props)=>{
    return(
        <>
            <tr>
                <td>{props.mentor}</td>
                <td>{props.evaluator}</td>
                <td>{props.average}</td>
            </tr>
        </>
    )
}

export default EvaluationSearchResult;