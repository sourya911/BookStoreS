import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";

    const handleLogOut= ()=>{
        logOut().then(()=>{
            alert("Sign Out Successfully")
            navigate(from,{replace:true})
        } )
    }
  return (
    <div className='h-screen bg-blue-200 flex items-center justify-center'>
        <button onClick={handleLogOut} className='bg-red-600 px-8 py-2 text-white rounded'>Logout</button>
    </div>
  )
}

export default Logout