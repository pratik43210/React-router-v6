// import { Navigate } from "react-router-dom"

import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  // return <Navigate to="/"/>

  const navigate=useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      // navigate("/")
      navigate(-1)
    },1000)
  },[])

  return (
    <h1>Not Found ⚠️</h1>
  )
}

export default NotFound