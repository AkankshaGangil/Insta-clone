import { SIGN_IN, SIGN_UP} from "./ActionType";

 export const signinAction = (data) => async(dispatch)=>{
    try{
        const res=await fetch("http://localhost:3000/login",{
        method:"GET",
        headers:{
            "Content-type":"application/json",
            Authorization:"Basic" + btoa(data.email + ":" + data.password)
        }})

        const token=res.headers.get("Authorization");
        localStorage.setItem("token",token);
        dispatch({type:SIGN_IN,payload:token });
    }
    catch (error) {
             console.log(error)
    }
}

export const signupAction = (data) => async(dispatch)=>{
    try{
        const res=await fetch("http://localhost:3000/signup",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
           
        }})

        const user = await res.json();

        console.log("signup user:",user)
        dispatch({type:SIGN_UP,payload:user });
    }
    catch (error) {
             console.log(error)
    }
}