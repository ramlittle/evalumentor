// On your app.js,
// 1. create a useEffect, on initial Load
// 2. Axios to express server,
// 3. on response, dispatch to reducer
// 4. In reducer, create a case to populate initialData


// const initialState= axios.get("http://localhost:8080/api/v1/mentors");
const initialState={
        mentors:[],
        evaluations:[],
        traits:[]
}

const reducer=(state=initialState,action)=>{
        // console.log(state);
        // console.log(state.data);
        switch(action.type){
                case "POPULATE_MENTORS": 
                        return {...state,mentors:action.payload.mentors}
                case 'DELETE_MENTOR':
                        return{
                                ...state,
                                mentors: state.mentors.filter(mentor=>mentor._id !==action.payload.id)
                        }
                case 'POPULATE_EVALUATIONS':
                        return {...state,evaluations:action.payload.evaluations}
                default:
                        return state;
        }       
}
export default reducer;