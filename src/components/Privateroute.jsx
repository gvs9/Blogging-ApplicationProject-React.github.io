import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isloggedIn } from '..';
function Privateroute() {
  
let loggedIn=true;
    

    if(loggedIn){
        return<Outlet/>
    }
    else{
return <Navigate to={"/login"}/>;
    }


}

export default Privateroute