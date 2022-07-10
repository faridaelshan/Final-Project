import { createStore,combineReducers } from "redux";
import BlogReducer from '../reducers/Blog'


// Store Start
export default ()=>{
    const store = createStore(
        combineReducers({
            item: BlogReducer
           
        })
    );
   return store; 
}