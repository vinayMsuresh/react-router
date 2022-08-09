import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
  return (
    <div>
        <p>Home page</p>
        <button onClick={()=>navigate('order', {replace: true})}>Place an order</button>
    </div>
  )
}

export default Home