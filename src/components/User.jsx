import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {

    const params = useParams();
    const navigate = useNavigate();

  return (
    <div className='user'>
      <button onClick={()=> navigate("/")}>CLICK ME</button>
    </div>
  )
}

export default User
