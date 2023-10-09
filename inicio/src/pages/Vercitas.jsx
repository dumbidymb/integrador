import React, { useState,useEffect} from 'react';
  import axios from 'axios';
  import Table from 'react-bootstrap/Table';
  import Navnar from'../moleculas/Navnar';
import Tooltip from '@mui/material/Tooltip';
 
  function Vercitas() {
    const [folio, setFolio] = useState('');
    const [citas, setCitas] = useState([]);

    const handleInputChange = (event) => {
      setFolio(event.target.value);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await axios.post('http://localhost:3002/mostrar', { 
          folio: folio });
        setCitas(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    const tableStyle = {
      backgroundColor: '#e6f7ff', 
      color: '#004080', 
    };
    
    const titleStyle = {
      color: '#1976D2', 
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    };

    const containerStyle = {
      margin: '20px', 
    };

    const buttonStyle = {
      backgroundColor: '#1976D2', 
      color: '#FFF', 
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    const inputStyle = {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc', // Borde gris claro
      width: '100%', // Ancho completo
      marginBottom: '10px',
    };
  
   
  const eliminarFila = async (folio) => {
    try {
      await axios.delete(`http://localhost:3002/eliminar/${folio}`);
      const citasActualizadas = citas.filter((cita) => cita.Folio !== folio);
      setCitas(citasActualizadas);
    } catch (error) {
      console.error(error);
    }
  };

   // Inicializar los tooltips de Bootstrap
 useEffect(() => {
  // Inicializar los tooltips de Bootstrap
  const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
  tooltips.forEach((tooltip) => {
    new window.bootstrap.Tooltip(tooltip);
  });
}, []);

    return (
      <div>
          <Navnar/>
      <div className="row"  class="container" style={containerStyle}>
        <div className="col-md-3">
          <h1 style={titleStyle}>Consultar mis citas</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={folio}
              onChange={handleInputChange}
              style={inputStyle}
              placeholder="Ingresa el folio a buscar"
            />
            <button type="submit" style={buttonStyle}>Buscar</button>
          </form>
        </div>
        <br/>
        <div className="col-md-8">
          <Table style={tableStyle} striped bordered hover>
            <thead>
              <tr>
                <th>Curp</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Acciones</th> 
              </tr>
            </thead>
            <tbody>
              {citas.map(item => (
                <tr key={item.id}>
                  <td>{item.Curp}</td>
                  <td>{item.Fecha}</td>
                  <td>{item.Hora}</td>
                  <td>
                  <Tooltip placement="top" title="El botón no funciona por ahora, favor de contactar al medico para realizar esta accion.">
                      <button
                        className="btn btn-primary"
                       
                        onClick={() => eliminarFila(item.Folio)}
                      >
                        Cancelar Cita
                      </button>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    );
  }

  export default Vercitas;