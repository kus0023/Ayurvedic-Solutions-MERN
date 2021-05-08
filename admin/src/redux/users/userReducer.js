import axios from 'axios'
import {ADD_USER,REMOVE_USER} from './userType'

const initialState={
    //list of users
    item:[]
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_USER:return{
            //add value to database
            ...state,
        }
        case REMOVE_USER: return{
            //remove user from db
            ...state,
        }
        default: return state
    }
}



export default userReducer