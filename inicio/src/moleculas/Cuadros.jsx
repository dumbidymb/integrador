import '../sources/Cuadros.css'
import '../assets/carpeta.png'
import imagenuno from "../assets/carpeta.png"
import imagendos from "../assets/estetoscopio.png"
import imagentres from "../assets/cuidado-de-la-salud.png"
import imagencuatro from "../assets/doctor-en-medicina.png"

function Cuadros(){
return(
    

<div class="container">
    
 
<div class="cuadrito"> 
<img src={imagendos} alt="" />
 <h2>Mas experiencia.</h2>
    <a>En Clínica Ruiz, la experiencia es uno de nuestros pilares fundamentales. El doctor Ruiz cuenta con una trayectoria sólida y reconocida en el ámbito médico. Sus años de práctica y su dedicación constante a mantenerse actualizado en los avances científicos y tecnológicos, lo convierten en un profesional altamente capacitado. </a></div>
  



<div class="cuadrito">
    <img src={imagenuno} alt="" />
<h2>Las respuestas correctas.</h2>
    <a> En nuestra clínica, creemos firmemente en la importancia de brindar respuestas precisas y confiables a nuestros pacientes. El doctor Ruiz se compromete a escuchar atentamente tus preocupaciones y a responder todas tus preguntas de manera clara y comprensible.</a>
</div>
  

  
<div class="cuadrito">
    <img src={imagentres} alt="" />
<h2>Tu eres la prioridad.</h2>
    <a>Nos preocupamos genuinamente por tu bienestar y nos comprometemos a proporcionarte un ambiente cálido y acogedor, donde te sientas cómodo y escuchado. Tu satisfacción y comodidad son nuestra máxima prioridad.</a>
</div>
  

   
<div class="cuadrito">
    <img src={imagencuatro} alt="" />
<h2>Innovacion con repercusion.</h2>
    <a>El doctor Ruiz adopta tecnologías innovadoras y técnicas de vanguardia, garantizando resultados óptimos y una atención de calidad superior. Nuestro compromiso con la innovación tiene un impacto directo en la efectividad y seguridad de los tratamientos que ofrecemos.</a>

</div>



</div>




);


}
export default Cuadros;