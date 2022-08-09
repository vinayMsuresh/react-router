import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthProvider';
function Navbar() {
    const auth = useAuth();

    const navStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
  return (
    <nav>
        <NavLink to='/' style={navStyle}>Home</NavLink>
        <NavLink to='/about' style={navStyle}>About</NavLink>
        <NavLink to='/products' style={navStyle}>Products</NavLink>
        <NavLink to='/users' style={navStyle}>Users</NavLink>
        {
          !auth.user && <NavLink to='/login' style={navStyle}>Login</NavLink>
        }
    </nav>
  )
}

export default Navbar