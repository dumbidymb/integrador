
import "../src/App.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import IniciarSesion from "./pages/Background";
import Registrarse from "./pages/Registrarse";
import Inicio from './pages/Inicio'
import Mapa from './pages/Mapa';
import Citas from './pages/Citas'
import Vercitas from "./pages/Vercitas";



import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<IniciarSesion/>,
     
    },
    {
      path:"/Registrarse",
      element:<Registrarse/>,
    },
    {
      path:"/Iniciarsesion",
      element:<IniciarSesion/>,
     
    },
  
    {
      path:"/Inicio",
      element:<Inicio/>,
    },
    {
      path:"/Mapa",
      element:<Mapa/>,
    },  
    {
      path:"/",
      element:<Inicio/>,
    },
    {
      path:"/Citas",
      element:<Citas/>,
    },  
    {
      path:"/Inicio",
      element:<Inicio/>,
    },  
    {
      path:"/Vercitas",
      element:<Vercitas/>,
    },  



  ])

  return (
    <>
 <RouterProvider router={router}/>

    </>
  )
}

export default App
