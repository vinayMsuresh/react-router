import React from 'react'
import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from './AuthProvider';

function Users() {
    const [search, setSearch] = useSearchParams();
    const navigate = useNavigate();
    const auth = useAuth();
    const searchParams = search.get('filter') === 'active';

    const handleLog = () => {
        auth.logout();
        navigate('/');
    }
  return (
    <>
        <nav style={{marginTop: '10px'}}>
            <NavLink to='1'>User1</NavLink>
            <NavLink to='2'>User2</NavLink>
            <NavLink to='3'>User3</NavLink>
        </nav>
        <div>
            <button onClick={()=>setSearch({filter: 'active'})}>Active Users</button>
            <button onClick={()=>setSearch({})}>Reset users</button>
        </div>

        {
            searchParams ? <h2>Active users</h2> : <h2>All users</h2>
        }
        <p>Welcome {auth.user }</p>

        <button onClick={handleLog}>Logout</button>

        <Outlet/>


    </>
  )
}

export default Users