import {createStore} from 'redux';

//import reducer
import reducer from './reducer';

const store=createStore(reducer);
export default store;