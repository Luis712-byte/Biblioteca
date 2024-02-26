import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import './styles/Navbar.css'


const Navbar = (props) => {
    const navigate=useNavigate()
    const cerrarsesion=()=>{
        auth.signOut()
        .then(()=>{
            navigate('/login')
        })
    }
  return (
    
    <nav class="navbar navbar-danger bg-danger">
       <div class="container-fluid">
        <Link className='navbar-brand' to="/"><img src="./public/cucLogo.png" width="40" height="40" ></img></Link>

        <div className='d-flex '>
            <Link className='btn btn-danger' to="/">Inicio</Link>
            
            {props.firebaseUser !== null && props.firebaseRol === 'Admin' ?  (
          <Link className='btn btn-danger' to="/admin">Admin</Link>
        ) : null}

        {props.firebaseUser !== null  && props.firebaseRol === 'Usuario' ? (
          <Link className='btn btn-danger' to="/libros">Libros Disponibles</Link>
        ) : null}

        {props.firebaseUser !== null  && props.firebaseRol === 'Usuario' ? (
          <Link className='btn btn-danger' to="/pedidos">Mis pedidos</Link>
        ) : null}

        {
          props.firebaseUser !== null ? (
            <button className='btn btn-danger iniciar-cerrarsesion'
              onClick={cerrarsesion}
            >Cerrar Sesión</button>
          ) : (
            <Link className='btn btn-danger' to="/login">Login</Link>
          )
        }
        </div>
        </div>
        </nav>
  )
}

export default Navbar