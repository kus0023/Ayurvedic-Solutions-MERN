import * as diseaseType from "../disease/diseaseType"


const initialState = {
    isLoading: false,
    diseaseList: [],
    error:{
        disease:null,
    },
  };

export default function diseaseReducer(state=initialState,{type,payload}) {
    switch(type){
        case diseaseType.SET_LOADING_TRUE:
            return{
                ...state,
                isLoading:true,
            }
        case diseaseType.SET_LOADING_FALSE:
            return{
                ...state,
                isLoading:false
            }
        case diseaseType.GET_DISEASE_LIST_SUCCESS:
            console.log(payload, type);
            return{
                
                ...state,
                diseaseList:[...[],...payload,],
                error:{
                    ...state.error,
                    disease:null,
                }
            };
            case diseaseType.GET_DISEASE_LIST_FAILURE:
                return{
                    ...state,
                    error:{
                        ...state.error,
                        disease:payload,
                    }
                };
        default:
            return state;
    }
}

