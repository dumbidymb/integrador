import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import '../sources/estilos.css'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

function Calendario() {
    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };
  
    return (
      <div className='app'>
        
        <div className='ainer'>
          <Calendar
            onChange={setDate}
            value={date}
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
        <div color='secondary' class className='time-buttons-container'>
   
        <button className="btn btn-primary" onClick={() => handleTimeSelection('2:00 PM')}>2:00 PM</button>
        <button className="btn btn-primary" onClick={() => handleTimeSelection('4:00 PM')}>4:00 PM</button>
        <button  className="btn btn-primary"onClick={() => handleTimeSelection('6:00 PM')}>6:00 PM</button>
        <button className="btn btn-primary" onClick={() => handleTimeSelection('8:00 PM')}>8:00 PM</button>
      </div>
      {selectedTime && (
        <p className='text-center'>
          <span className='bold'>Hora seleccionada:</span> {selectedTime}
        </p>
      )}
    </div>
  
      
    );
  }
export default Calendario;