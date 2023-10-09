import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import '../sources/estilos.css';
import Swal from 'sweetalert2';
import Axios from "axios";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

import 'react-datepicker/dist/react-datepicker.css';


function Input() {
  const [date, setDate] = useState(new Date());
  const [dato, setDato] = useState("");
  const [selectedTime, setSelectedTime] = useState('');
 
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const [nombre_usuario, setNombre_usuario] = useState('');
  const [nombre_P, setNombre_P] = useState('');
  const [nombre_M, setNombre_M] = useState('');
  const [curp, setCurp] = useState('');
  const [numero, setNumero] = useState('');
const [religion, setReligion] = useState('');
  const [correo, setCorreo] = useState('');

  const [colonia, setColonia] = useState('');
  const [calle, setCalle] = useState('');
  const [numeroCasa, setNumeroCasa] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const day = date.getDate(); // Obtener el día
  const month = date.getMonth() + 1; // Obtener el mes (se suma 1 ya que los meses en JavaScript van de 0 a 11)
  const year = date.getFullYear(); // Obtener el año
  const [genero, setGenero] = useState('');
  const fechaFormateada = date.toISOString().slice(0, 10);

  const add = () => {
    const folio = Math.floor(100000 + Math.random() * 900000);
    const usuario = localStorage.getItem('usuario'); // Obtener el usuario del almacenamiento local
    Axios.post("http://localhost:3002/create2", {
        correo: correo,
        nombre_usuario: nombre_usuario,
        apellido_P: nombre_P,
        apellido_M: nombre_M,
        numero: numero,
        colonia: colonia,
        c_postal: codigoPostal,
        dia_nac: day,
        mes_nac: month,
        anio_nac: year,
        calle: calle,
        ciudad: seleccion,
        num_casa: numeroCasa,
        curp: curp,
        religion: religion, 
        genero: genero 
      })
    .then(() => {
      Axios.post("http://localhost:3002/create", {
      folio: folio,
      date: fechaFormateada,
      selectedTime: selectedTime,
      curp : curp,
    })
      .then(() => {
        alert("paciente registrado");
      })
      .catch((error) => {
        console.error(error);
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  

  const handleCurpChange = (event) => {
    const inputValue = event.target.value.toUpperCase();
    if (inputValue.length <= 18) {
      setCurp(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!nombre_usuario ||! nombre_M ||!nombre_P || !curp || !numero || !correo || !day || !month || !year || !colonia || !seleccion || !numeroCasa || !calle || !codigoPostal || !religion || !genero) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llena todos los campos!',
        footer: '<a id="secondAlertLink" href="#">Por qué tengo estos problemas?</a>'
      }).then((result) => {
        if (result.isConfirmed) {

        }
      }) } else if (curp.length !== 18) {
        Swal.fire({ 
          icon: 'error',
          title: 'Oops...',
          text: 'El CURP debe tener 18 dígitos.',
        }) 
      const secondAlertLink = document.getElementById('secondAlertLink');
      secondAlertLink.addEventListener('click', (event) => {
        event.preventDefault();
        Swal.fire({
          title: 'Verifica que tengas todos los campos llenos y con los datos correctos'
        });
      });
    } else {
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás cambiar los datos!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, confirmado!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Guardado!',
            'Tu cita se ha guardado.',
            'success'
          );

          add(); 
          setCorreo('');
          setNombre_P('');
          setNombre_M('');
          setCodigoPostal('');
          setSeleccion('');
          setColonia('');
          setCalle('');
          setMonth('');
          setDay('');
          setYear('');
          setNumeroCasa('');
          setNombre_usuario('');
          setCurp('');
          setNumero('');
          setReligion('');
          setGenero('');
        }
      });
    }
  };


  const [mostrarInputs, setMostrarInputs] = useState(false);
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');

  const handleButtonClick = () => {
    setMostrarInputs(true);
  };

  const handleHideInputs = () => {
    setMostrarInputs(false);
    setValor1('');
    setValor2('');
  };

  const handleInputChange1 = (event) => {
    setValor1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setValor2(event.target.value);
  };
  const [seleccion, setSeleccion] = useState('');

  const handleSelectChange = (event) => {
    setSeleccion(event.target.value);
  };


  const handleDayChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Solo acepta números
    if (inputValue.length <= 2) {
      setDay(inputValue);
    }
  };

  const handleMonthChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Solo acepta números
    if (inputValue.length <= 2) {
      setMonth(inputValue);
    }
  };

  const handleYearChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Solo acepta números
    if (inputValue.length <= 4) {
      setYear(inputValue);
    }
  };

  const handleCheckboxChange = (event) => {
    const checkboxes = document.getElementsByName('gender');
  
    checkboxes.forEach((checkbox) => {
      if (checkbox !== event.target) {
        checkbox.checked = false;
      }
    });
  };
  
  // Asignar la función al evento de cambio de los checkboxes
  const checkboxes = document.getElementsByName('gender');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange);
  });

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };
  const handleNumeroCasaChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Solo acepta números
    setNumeroCasa(inputValue);
  };
  const handleCodigoPostalChange = (event) => {
    let inputValue = event.target.value.replace(/\D/g, ''); 
    inputValue = inputValue.slice(0, 5); 
  
    if (inputValue.length < 5) {

      console.log("El código postal debe contener 5 dígitos.");
    }
  
    setCodigoPostal(inputValue);
  };

  const [validatedNumber, setValidatedNumber] = useState('');

  // Update the validatedNumber state whenever the user enters a new value
  useEffect(() => {
    const inputValue = numero.replace(/\D/g, ''); // Remove non-digit characters
    const maxLength = 10; // Maximum number of digits allowed
    setValidatedNumber(inputValue.slice(0, maxLength)); // Truncate to maxLength
  }, [numero]);
  const checkAvailability = () => {
    // Hacer una llamada a la base de datos para verificar la disponibilidad
    Axios.post("http://localhost:3002/create", {
      date: date.toISOString(), // Convertir la fecha seleccionada a formato de cadena ISO
      selectedTime: selectedTime
    })
      .then((response) => {
        const { isAvailable } = response.data;
        if (!isAvailable) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La fecha y hora seleccionadas ya están ocupadas. Por favor, elige otra.',
          });
          setSelectedTime(''); // Limpiar la hora seleccionada si no está disponible
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Efecto que se dispara cada vez que la fecha o la hora cambie
  useEffect(() => {
    if (selectedTime && date) {
      checkAvailability();
    }
  }, [selectedTime, date]);

  const handleCorreoChange = (event) => {
    const inputValue = event.target.value;
    // Verificar si el correo tiene el dominio "@gmail.com"
    const hasValidDomain = inputValue.endsWith('@gmail.com');
    // Actualizar el estado del correo y la validación del dominio
    setCorreo(inputValue);
    setValidDomain(hasValidDomain);
  };

  
  const [fechasOcupadas, setFechasOcupadas] = useState([]);

  useEffect(() => {
    getFechasOcupadas().then((fechas) => {
      setFechasOcupadas(fechas);
    });
  }, []);

  const getFechasOcupadas = async () => {
    try {
      const response = await Axios.get("http://localhost:3002/create");
      return response.data; // Supongamos que devuelve un array de fechas en formato ISO (e.g., ["2023-07-25", "2023-07-27"])
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <div className='container-date'>
     <div className="divisor">
  <div className="form-panel">
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={nombre_usuario}
          onChange={(event) => { setNombre_usuario(event.target.value); }}
          className="form-control"
        />
      </div>
      <br/>
      <div className="form-group">
    
        <input
          type="text"
          id="name"
          placeholder='Apellido paterno'
          value={nombre_P}
          onChange={(event) => { setNombre_P(event.target.value); }}
          className="form-control"
        />
        <br/>
         <input
          type="text"
          placeholder='Apellido materno'
          id="name"
          value={nombre_M}
          onChange={(event) => { setNombre_M(event.target.value); }}
          className="form-control"
        />
        
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="curp">CURP:</label>
        <input
          type="text"
          id="curp"
          value={curp}
          onChange={handleCurpChange}
          className="form-control"
        />
      </div>
      <br />
      <div className="form-group">
      <label htmlFor="number">Número:</label>
      <input
        type="text"
        pattern="^\d{0,10}$" // Regular expression for numbers with up to 10 digits
        title="Por favor ingresa un número telefónico válido"
        required
        id="number"
        value={validatedNumber} // Use the validated number value in the input field
        onChange={(event) => { setNumero(event.target.value); }}
        className="form-control"
      />
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="text">Religion:</label>
        <input
          type="text"
     

        
          value={religion}
          onChange={(event) => { setReligion(event.target.value); }}
          className="form-control"
        />
      </div>
    </form>
  </div>

  <div className="form-panel">
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(event) => { setCorreo(event.target.value); }}
          className="form-control"
        />
      </div>
      <br />  
      <div>
      <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
        <input    
          id="fechaNacimiento"
          selected={dato}
          onChange={(dato) => setDato(dato)}
          dateFormat="dd/MM/yyyy"
          className='form-control'
type='date'
        />

    </div>
    <br/>
    <label>Genero:</label>
    <div class="gender">
   <label>hombre</label>
    <input type="checkbox" name="gender" id="hombre" value="Hombre" onChange={handleGeneroChange} />
    <label>Mujer</label>
<input type="checkbox" name="gender" id="mujer" value="Mujer" onChange={handleGeneroChange} />
<label>Otros</label>
<input type="checkbox" name="gender" id="otros" value="Otros" onChange={handleGeneroChange} />

</div>

      <br />
      <div className="form-group">
  
      {!mostrarInputs ? (
        <button onClick={handleButtonClick} className="btn btn-primary">
          Editar dirección
        </button>
      ) : (
        <div>
      <select id="seleccion" value={seleccion} onChange={handleSelectChange} placeholder='ciudad'>
      <option>Ciudades</option>
  <option value="Tuxtla Gutiérrez">Tuxtla Gutiérrez</option>
  <option value="Tapachula de Córdova y Ordóñez">Tapachula de Córdova y Ordóñez</option>
  <option value="San Cristóbal de Las Casas">San Cristóbal de Las Casas</option>
  <option value="Comitán de Domínguez">Comitán de Domínguez</option>
  <option value="Heroica Chiapa de Corzo">Heroica Chiapa de Corzo</option>
  <option value="Palenque">Palenque</option>
  <option value="Cintalapa de Figueroa">Cintalapa de Figueroa</option>
  <option value="Ocosingo">Ocosingo</option>
  <option value="Ocozocoautla de Espinosa">Ocozocoautla de Espinosa</option>
  <option value="Tonalá">Tonalá</option>
  <option value="Villaflores">Villaflores</option>
  <option value="Berriozábal">Berriozábal</option>
  <option value="Huixtla">Huixtla</option>
  <option value="Reforma">Reforma</option>
  <option value="Motozintla de Mendoza">Motozintla de Mendoza</option>
  <option value="Arriaga">Arriaga</option>
  <option value="Las Margaritas">Las Margaritas</option>
  <option value="Frontera Comalapa">Frontera Comalapa</option>
  <option value="Las Rosas">Las Rosas</option>
  <option value="Teopisca">Teopisca</option>
  <option value="Suchiapa">Suchiapa</option>
  <option value="Mapastepec">Mapastepec</option>
  <option value="Cacahoatán">Cacahoatán</option>
  <option value="Yajalón">Yajalón</option>
  <option value="Pijijiapan">Pijijiapan</option>
  <option value="Ciudad Hidalgo">Ciudad Hidalgo</option>
  <option value="Venustiano Carranza">Venustiano Carranza</option>
  <option value="Pichucalco">Pichucalco</option>
  <option value="Acala">Acala</option>
  <option value="Simojovel de Allende">Simojovel de Allende</option>
  <option value="Bochil">Bochil</option>
  <option value="Pueblo Nuevo Solistahuacán">Pueblo Nuevo Solistahuacán</option>
  <option value="Nueva Palestina">Nueva Palestina</option>
  <option value="El Parral">El Parral</option>
  <option value="Jaltenango de la Paz">Jaltenango de la Paz</option>
  <option value="Jiquipilas">Jiquipilas</option>
  <option value="Villa Corzo">Villa Corzo</option>
  <option value="La Trinitaria">La Trinitaria</option>
  <option value="Escuintla">Escuintla</option>
  <option value="Altamirano">Altamirano</option>
  <option value="Oxchuc">Oxchuc</option>
  <option value="Benemérito de las Américas">Benemérito de las Américas</option>
  <option value="San Pedro Buenavista">San Pedro Buenavista</option>
  <option value="Copoya">Copoya</option>
  <option value="Tila">Tila</option>
  <option value="Puerto Madero (San Benito)">Puerto Madero (San Benito)</option>
  <option value="Chanal">Chanal</option>
  <option value="Chilón">Chilón</option>
  <option value="Revolución Mexicana">Revolución Mexicana</option>
  <option value="Pantelhó">Pantelhó</option>
  <option value="San Juan Cancuc">San Juan Cancuc</option>
  <option value="Tapilula">Tapilula</option>
  <option value="La Concordia">La Concordia</option>
  <option value="Huehuetán">Huehuetán</option>
  <option value="Villa Comaltitlán">Villa Comaltitlán</option>
  <option value="Acacoyagua">Acacoyagua</option>
  <option value="Jesús María Garza">Jesús María Garza</option>
  <option value="Jardines del Grijalva">Jardines del Grijalva</option>
  <option value="San Francisco Pujiltic">San Francisco Pujiltic</option>
  <option value="Raudales Malpaso">Raudales Malpaso</option>
  <option value="Juárez">Juárez</option>
  <option value="Mazatán">Mazatán</option>
  <option value="Tuxtla Chico">Tuxtla Chico</option>
  <option value="Petalcingo">Petalcingo</option>
  <option value="Ciudad Maya">Ciudad Maya</option>
  <option value="Copainalá">Copainalá</option>
  <option value="Chicomuselo">Chicomuselo</option>
  <option value="Huehuetán Estación FFCC">Huehuetán Estación FFCC</option>
  <option value="Álvaro Obregón">Álvaro Obregón</option>
  <option value="Rayón">Rayón</option>
  <option value="Paredón">Paredón</option>
  <option value="Vida Mejor I">Vida Mejor I</option>
  <option value="Rincón Chamula">Rincón Chamula</option>
  <option value="Bachajón">Bachajón</option>
  <option value="Ixtapa">Ixtapa</option>
  <option value="Tzimol">Tzimol</option>
  <option value="Acapetahua">Acapetahua</option>
  <option value="Salto de Agua">Salto de Agua</option>
  <option value="Frontera Corozal">Frontera Corozal</option>
  <option value="Amatenango del Valle">Amatenango del Valle</option>
  <option value="El Bosque">El Bosque</option>
  <option value="El Jobo">El Jobo</option>
  <option value="Venustiano Carranza">Venustiano Carranza</option>
  <option value="El Triunfo">El Triunfo</option>
  <option value="Jitotol">Jitotol</option>
  <option value="Zinacantán">Zinacantán</option>
  <option value="Ocotepec">Ocotepec</option>
  <option value="Ixtacomitán">Ixtacomitán</option>
  <option value="Pasté">Pasté</option>
  <option value="Socoltenango">Socoltenango</option>
  <option value="Navenchauc">Navenchauc</option>
  <option value="Tenango">Tenango</option>
  <option value="La Libertad">La Libertad</option>
</select>

<input
            type="text"
            value={colonia}
            placeholder='Colonia'
            onChange={(event) => setColonia(event.target.value)}
            className="form-control"
          />
          <input
            type="text"
            value={calle}
            placeholder='Calle'
            onChange={(event) => setCalle(event.target.value)}
            className="form-control"
          />
          <input
    type="text"
  value={numeroCasa}
  placeholder="Número de casa"
  onChange={handleNumeroCasaChange}
  className="form-control"
/>


<input
  type="text"
  value={codigoPostal}
  placeholder="Código postal"
  onChange={handleCodigoPostalChange}
  className="form-control"
/>

       <br/>
          <button onClick={handleHideInputs} className="btn btn-primary">
            confirmar
          </button>
        </div>
      )}
    </div>
      <br />
      <button type="submit" className="btn btn-primary">Agendar cita</button>
    </form>
  </div>
</div>
<div className='app'>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          tileDisabled={({ date }) =>
            date.getDay() === 0 ||
            date.getDay() === 6 ||
            fechasOcupadas.some((fecha) => date.toISOString().slice(0, 10) === fecha)
          }
        />
        </div>
        {Array.isArray(date) ? (
          <p className='text-center'>
            <span className='bold'>Seleccione la fecha:</span> {date[0].toDateString()}
          </p>
        ) : (
          <p className='text-center'>
            <span className='bold'>Seleccione la fecha:</span> {date.toDateString()}
          </p>
        )}
        <div className='time-buttons-container'>
          <button className="btn btn-primary" onClick={() => handleTimeSelection('2:00 PM')}>2:00 PM</button>
          <button className="btn btn-primary" onClick={() => handleTimeSelection('4:00 PM')}>4:00 PM</button>
          <button className="btn btn-primary" onClick={() => handleTimeSelection('6:00 PM')}>6:00 PM</button>
          <button className="btn btn-primary" onClick={() => handleTimeSelection('8:00 PM')}>8:00 PM</button>
        </div>
        {selectedTime && (
          <p className='text-center'>
            <span className='bold'>Hora seleccionada:</span> {selectedTime}
          </p>
        )}
      </div>
    </div>
  );
}

export default Input;
