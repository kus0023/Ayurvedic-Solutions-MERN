import {REMOVE_PRODUCT,ADD_PRODUCT} from './productType'

export const addProduct=()=>{
    return{
        type:ADD_PRODUCT
    }
}

export const removeProduct=()=>{
    return{
        type:REMOVE_PRODUCT
    }
}