import './App.css';
import { lazy, Suspense } from 'react';
import Home from './components/Home';
// import About from './components/About';
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Order from './components/Order';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import Featured from './components/Featured';
import New from './components/New';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Login from './components/Login';
import AuthProvider from './components/AuthProvider';
import NestRoute from './components/NestRoute';
const About = lazy(()=> import('./components/About'));
function App() {
  return (
    <AuthProvider className="App">
      <Suspense fallback='loading...'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='about' element={<About/>} />

          <Route path='order' element={<Order/>} />

          <Route path='products' element={<Products/>} >
            <Route index element={<Featured/>} />
            <Route path='featured' element={<Featured/>} />
            <Route path='new' element={<New/>} />
          </Route>

          <Route path='users' element={<NestRoute><Users/></NestRoute>} >
            <Route path=':userId' element={<NestRoute><UserDetails/></NestRoute>} />
          </Route>

          <Route path='login' element={<Login/>} />

          <Route path='*' element={<NoMatch/>} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
