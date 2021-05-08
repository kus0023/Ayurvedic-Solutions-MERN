import {REMOVE_PRODUCT,ADD_PRODUCT} from './productType'

export const addProduct=(data)=>{
    return{
        type:ADD_PRODUCT,
        payload:data
    }
}

export const removeProduct=()=>{
    return{
        type:REMOVE_PRODUCT
    }
}

export const updateitem=(data)=>{
    return{
        type:REMOVE_PRODUCT,
        payload:data
    }
}