import '../sources/Ubicacion.css'
import clinica from "../assets/clinica.jpg"
import { Link } from 'react-router-dom';
import Consultorio from '../assets/consultorio.jpeg'
import Consultorio2 from '../assets/consultorio2.jpeg'




function Ubicacion(){
   
    
return(
    
<div class="papados">

<div class="card">


<img class='clinica' src={Consultorio} alt="" />



</div>

<div className="cardU">
<h1>Clinica Ruiz </h1>
<h1 className="linea" >¡Contactanos!</h1>

<h1>Dr. Jaime Ruiz Hernandez.</h1>
<h1>Medico Cirujano</h1>
<h1>Telefono de contacto: 961 251 9584</h1>
<h1>Direccion: Col. Pomarrosa - Calle margaritas.</h1>
<div className="papauno">
<Link to="/Mapa" >
       <button  class="ubi">  ¿Cómo llegar?</button>
      </Link>
 
 



</div>

</div>


<div className="card" >
<img  className='clinica' src={Consultorio2} alt="" />
    

    
</div>



</div>

);

}
export default Ubicacion;