import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import "../sources/CardLogin.css";
import { useNavigate } from 'react-router-dom';

function CardLogin() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(false);
    

  
  

    axios.post('http://localhost:3002/formulario', { usuario: nombre, contrasena: contrasena })
      .then(response => {
        
        if (response.data) {
          navigate("/Inicio", { replace: true });
        } else {
          setError(true);
        }
      })
      .catch(error => {
        setError(true);
      });
  };
 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
  };

  return (
    <div className="tarjeta">
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="nombre">Usuario:</label>
        <input className="input2" type="text" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange} required />

        <label className="label" htmlFor="contrasena">Contraseña:</label>
        <input className="input2" type="password" id="contrasena" name="contrasena" value={contrasena} onChange={handleContrasenaChange} required />

        <button className="button" type="submit">Enviar</button>
      </form>
      <footer className="futer">
        <Link to="/registrarse">¿No tienes una cuenta?</Link>
      </footer>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Credenciales inválidas. Verifica tu nombre de usuario y contraseña.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CardLogin;
