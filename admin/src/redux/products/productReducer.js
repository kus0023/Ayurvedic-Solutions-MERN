import {REMOVE_PRODUCT,ADD_PRODUCT} from './productType'

initialState={
    //product data
}

const productReducer=(state,action)=>{
    switch(action.type){
        case REMOVE_PRODUCT:return{
            // remove product from db
            ...state,
        }
        case ADD_PRODUCT:return{
            //add product
            ...state
        }
        default:return state
    }
}
export default productReducer