import 'react-datepicker/dist/react-datepicker.css';
import '../sources/estilos.css'
import imagen from '../assets/OIP.jpg'

function Imagen() {
    return (
      <div className="image-panel">
      <img src={imagen} alt="Imagen" className="image" />
    </div>
    );
  };
  export default Imagen;