import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Admin from './components/Admin';
import Navbar from './components/Navbar';
import Reservas from './components/Libros';
import { auth, db } from './firebase';
import MisReservas from './components/Pedidos';

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);
  const [firebaseRol, setFirebaseRol] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRole = useCallback(async (Mail) => {
    try {
      const userSnapshot = await db.collection('Usuarios').doc(Mail).get();
      const userData = userSnapshot.data();
      if (userData && userData.Rol === 'Usuario') {
        return 'Usuario';
      } else if (userData && userData.Rol === 'Admin') {
        return 'Admin';
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);
        if (user) {
          setFirebaseUser(user);
          const role = await getRole(user.email);
          setFirebaseRol(role);
        } else {
          setFirebaseUser(null);
        }
        setLoading(false); // Indica que la carga ha finalizado
      });
    };

    checkUser();
  }, [getRole]);

  if (loading) {
    return <div class="custom-loader"></div>; // Muestra un mensaje de carga mientras se verifica el usuario y se obtiene su rol
  }

  console.log('El rol es: ' + firebaseRol);

  return firebaseUser !== false ? (
    <Router>
      <div className=''>
        <Navbar firebaseUser={firebaseUser} firebaseRol={firebaseRol} />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='login' element={<Login />} />
          <Route path='admin' element={<Admin firebaseRol={firebaseRol} />} />
          <Route path='libros' element={<Reservas />} /> 
          <Route path='pedidos' element={<MisReservas />} />
        </Routes>    
      </div>
    </Router>
    
  ) : (
    <div class="custom-loader"></div>
  );
}

export default App;