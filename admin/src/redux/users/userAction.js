import {ADD_USER,REMOVE_USER} from './userType'
import  from 'axios'
export const addUser=()=>{
    return{
        type:ADD_USER
    }
}

export const removeUser=()=>{
    return{
        type:REMOVE_USER
    }
}

const setLoadingTrue()=>{
    return
}

const fetchUser=(page , limit)=>{
    return function(dispatch){
        dispatch(fetchUserRequest())
        
        axios.get('/api/admin/users?page='+page+"&limit="+limit).then()
    }
}