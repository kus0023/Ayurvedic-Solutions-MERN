import * as authType from '../users/userType'

export const setLoginLoading=(isLoading)=>{
    if(isLoading){
        return{ type: authType.SET_LOGIN_LOADING_TRUE}
    }
    else{
        return { type:authType.SET_LOGIN_LOADING_FALSE}
    }
};

export const setLoginSuccess=(user,token)=>{
    localStorage.setItem("token",token);
    return { type:authType.LOGIN_SUCCESS, payload:user};
};

export const setLoginFailure=(error)=>{
    return{type:authType.LOGIN_FAILED_WITH_ERROR,payload:error};
}

export const setIsReady=(isReady)=>{
    if(isReady){
        return { type:authType.SET_READY_TRUE}
    }
    else{
        return { type:authType.SET_READY_FALSE}
    }
}

export const setUser=(user)=>{
    return { type: authType.SET_USER,payload:user };
}

export const setLogoutLoading=(isLoading)=>{
    if(isLoading){
        return{ type:authType.SET_LOGIN_LOADING_TRUE}
    }else{
        return{ type:authType.SET_LOGOUT_LOADING_FALSE}
    }
}