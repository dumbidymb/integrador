import "../sources/IniciarSesion.css"
import heart from "../assets/hear.gif"
import Login from "../organismo/Login";


function IniciarSesion(){
return(

<body>
  <div class="container w-75">
      <div class="row align-items-center">
          <div class="col background col-12 col-md-6 col-xl-4 " >
                  <img  class='background' src={heart} alt="" />
          </div>
          <div class="col-md-6 col-lg-8">
                    <Login/>
          </div>
      </div>       
  </div>
</body>
 
);


}
export default IniciarSesion