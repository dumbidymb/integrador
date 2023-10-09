import "../sources/Registrarse.css"
import heart from "../assets/hear.gif"
import Registro from "../organismo/Registro";
function Registrarse(){
return(
  <div>
<div>
  <img  class='background' src={heart} alt="" />
</div>
<Registro/>
  </div>
);


}
export default Registrarse;