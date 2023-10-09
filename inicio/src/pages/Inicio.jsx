import "../pages/inicio.css"
import Header from '../moleculas/Header'
import Cabezera from "../moleculas/Cabeza"
import Boton from '../moleculas/Boton'
import Cuadros from '../moleculas/Cuadros'
import Card from '../moleculas/Card'
import Ubicacion from '../moleculas/Ubicacion'
import Footer from "../moleculas/Footer";
import ScrollToTopButton from "../organismo/Scrollbutton"


function Inicio(){
    return(
<>
<Header/>
<Cabezera/>
<div className="div-main">
<Boton/>
<Cuadros/>
</div>

<Card/>
<Ubicacion/>
<ScrollToTopButton/>
<Footer/>
</>

);

}
export default Inicio;