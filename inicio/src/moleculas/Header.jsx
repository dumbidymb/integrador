import "../sources/Header.css"
import LogoM from '../assets/MedicLogo.png'
import logoS from '../assets/salud.png'
import logoU from '../assets/universidad.png'
import { Link } from 'react-router-dom';


function Header(){
return(
 
<div class="barra">
        <div class="padre"> 
        <div class="txt"> 
      <img src={LogoM} alt="" />
        </div>

        <div class="txt">
        <img src={logoS} alt="" />
        </div>

        <div class="txt">
        <img src={logoU} alt="" />
        </div>
  
        
        </div>
        <Link className="link-button" to={"/Vercitas"}>ver citas</Link>
        </div>
   
     
      



);
}
export default Header;