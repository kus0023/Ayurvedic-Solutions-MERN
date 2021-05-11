import axios, {} from 'axios'
import * as actionCreator from "./userActionCreator"
import * as authType from "./userType"


export const login=(email,password)=> async(dispatch)=>{
    dispatch(actionCreator.setLoginLoading(true));
    try{
        const data={ email,password };
        const res=await axios.post("/api/admin/login/",data);

        const { user,token }=res.data;
        dispatch(actionCreator.setLoginSuccess(user,token));
    } catch(error){
      console.log(error.response);
        const message= error.response.data.message || "invalid email or password";
        dispatch(actionCreator.setLoginFailure(message));
    } finally{
        dispatch(actionCreator.setLoginLoading(false))
    }
};

export const getAuth=()=> async(dispatch)=>{
    const token= localStorage.getItem("token");

    const config={
        header:{
            Authorization: "Bearer "+token,
        },
    };

    try {
        if (token) {
          const res = await axios.get("api/user/getAuth", config);
    
          const { user } = res.data;
          dispatch(actionCreator.setUser(user));
        } else {
          throw new Error("SESSION EXPIRED");
        }
      } catch (e) {
        console.log(e.response?.data || e.message);
        dispatch(actionCreator.setUser(null));
      } finally {
        dispatch(actionCreator.setIsReady(true));
      }
    };
    
    export const logout = () => async (dispatch) => {
      dispatch(actionCreator.setLogoutLoading(true));
    
      //get the token
      //const token = localStorage.getItem("token");
    
      // const config = {
      //   headers: {
      //     Authorization: "Bearer " + token,
      //   },
      // };



    try{
        //const res=await axios.get("api/admin/getAuth",config);
        localStorage.removeItem("token");
        dispatch({type: authType.LOGOUT });
    }catch(e){
        console.log(e.response.data);
    }finally{
        dispatch(actionCreator.setLogoutLoading(false));
    }
};

