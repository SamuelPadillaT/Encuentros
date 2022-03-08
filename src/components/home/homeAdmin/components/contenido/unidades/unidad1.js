import React from 'react'
import {Div, H3, H4, H5} from '../styles';
import { Link } from "react-router-dom";

const unidad1 = () => {
    return (
        <div>
            <H4>Una mirada a si mismo (Temario)</H4><br/>
            <Link to="/U1actividad_1" target="_blank"><H5>- Tengo un cuerpo</H5></Link><br/>
            <Link to="/U1actividad_2" target="_blank"><H5>- Mi robot geometrico y su mendo de colores</H5></Link><br/>
            <Link to="/U1actividad_3" target="_blank"><H5>- El gigante y yo</H5></Link><br/>
            <Link to="/U1actividad_4" target="_blank"><H5>- ¡Buenos días, sol! ¡Buenas noches, luna!</H5></Link><br/>
            <Link to="/U1actividad_5" target="_blank"><H5>- El baúl de las vocales</H5></Link><br/>
            <Link to="/U1actividad_6" target="_blank"><H5>- ¡Vamos a jugar con las vocales!</H5></Link><br/>
            <Link to="/U1actividad_7" target="_blank"><H5>- Tengo cinco dedos en la mano</H5></Link><br/>
            <Link to="/U1actividad_8" target="_blank"><H5>- ¡Y ahora a contar!</H5></Link><br/>
            <Link to="/U1actividad_9" target="_blank"><H5>- Fui un bebe y estoy creciendo</H5></Link><br/>
            <Link to="/U1actividad_10" target="_blank"><H5>- Michín limpia su cuarto</H5></Link><br/>
        </div>
        
    )
}

export default unidad1
