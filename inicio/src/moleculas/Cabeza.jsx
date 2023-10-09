import "../sources/Cabezera.css"
import { Link } from 'react-router-dom';
import React from 'react';
import background from '../assets/esteto.jpg'
function Cabezera(){
	
return(
    <div>

<header class="header">
  
	<div class="overlay">

<h1>Clinica Ruiz</h1>
<h3>Razon para elegir CR</h3>
<p></p>

<Link to="/Citas" >
<button class="button2">Agendar citas.</button>
      </Link>


		</div>
</header>

<div class="separador"></div>
    </div>
    
);


}
export default Cabezera;