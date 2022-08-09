import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
        <input type='text' placeholder='Search a product here' /> 
        <br/>
        <nav>
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link> 
        </nav>
        <br/>
        <Outlet />
    </div>
  )
}

export default Products