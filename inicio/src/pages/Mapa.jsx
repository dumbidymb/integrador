import React, { useState } from 'react';
import Iframe from 'react-iframe'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import '../sources/Mapa.css'

function Mapa(){
return(

<div class="google">
    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.9990762090296!2d-93.12905355126603!3d16.77685945052011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8db5bdafd57%3A0x22ab4cb33bdb2fd4!2sMargaritas%20275%2C%20Pomarrosa%2C%2029014%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1686628153288!5m2!1ses-419!2smx" width="100%" height='100%'  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
</div>



   


    


);



}
export default Mapa;