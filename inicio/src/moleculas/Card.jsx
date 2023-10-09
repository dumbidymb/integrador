import "../sources/Card.css"
import Doc from '../assets/doc.jpeg'
import Bata from '../assets/bata.jpg'

function Card(){
return(
<div className="papa">

<div className="card-inf">
    <img class="esteto" src={Bata} alt="" />
 
 <img className="doc" src={Doc} alt="" /> 
<div className="txt1">
    <div>
    <h1>-Consulta de revision general.</h1>
<h1>-Consulta pediatricas.</h1>
<h1>-Consulta de control de embarazo.</h1>
<h1>-Consulta de de control de enfermedades cronico degenerativas.</h1>
    </div>


<div>

<h1>-Eliminacion de cuerpos extraños en; oido, nariz, ojo, piel etc.</h1>
<h1>-Curaciones.</h1>
<h1>-Cnsultas de enfermedades infecto contagiosas.</h1>
<h1>-Cirugias menores: tumoraciones bnignas, onicocriptosis, extraccion de lipomas, quistes sinoviales.</h1> 
</div>



</div>
<div>

<h1 class="frase">"La excelencia en el cuidado de nuestros pacientes es nuestra prioridad máxima. Estamos comprometidos a brindar tratamientos quirúrgicos de vanguardia en nuestra clínica privada, combinando experiencia, tecnología de punta y un enfoque personalizado para obtener los mejores resultados." </h1>
</div>

</div>

</div>

);

}
export default Card;