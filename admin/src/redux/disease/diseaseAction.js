import axios from "axios";
import * as diseaseType from "../disease/diseaseType"


function setLoading(isLoading){
    return{
        type: isLoading
        ? diseaseType.SET_LOADING_TRUE
        : diseaseType.SET_LOADING_FALSE,
    };
}

function setDiseaseList(list){
    console.log("diseaselist",list)
    return{
        type: diseaseType.GET_DISEASE_LIST_SUCCESS,
        payload: list
    }
}


function setDiseaeListError(error) {
    if (typeof error === "string") {
      return { type: diseaseType.GET_DISEASE_LIST_FAILURE, 
            payload: error };
    } else {
      return {
        type: diseaseType.GET_DISEASE_LIST_SUCCESS,
        payload: "USER LIST FETCH ERROR",
      };
    }
  }


export const getDisease=()=>(dispatch)=>{
    dispatch(setLoading(true));
    const token=localStorage.getItem("token");
    const config={
        headers:{
            Authorization:"Bearer "+ token,
        },
    };
    axios.get("/api/disease/get",config)
    .then((res)=>{
        console.log("result",res.data.diseases);
        dispatch(setDiseaseList(res.data.diseases))
    })
    .catch((err)=>{
        dispatch(setDiseaeListError(
            err.message || err.response?.data?.message || "Disease Fetch Error"
        ))
    })
    .finally(()=>{
        dispatch(setLoading(false));
    })
}