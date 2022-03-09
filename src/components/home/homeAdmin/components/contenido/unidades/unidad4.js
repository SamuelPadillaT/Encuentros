import React from 'react'
import {Div, H3, H4, H5} from '../styles';
import { Link } from "react-router-dom";
const unidad4 = () => {
    return (
        <div>
            <H4>Disfruto y aprendo de la naturaleza (Temario)</H4><br/>
            <Link to="/U4actividad_1" target="_blank"><H5>- Tengo una mascota</H5></Link><br/>
            <Link to="/U4actividad_2" target="_blank"><H5>- La granja de mi tío Pancho</H5></Link><br/>
            <Link to="/U4actividad_3" target="_blank"><H5>- Un león atrevido</H5></Link><br/>
            <Link to="/U4actividad_4" target="_blank"><H5>- ¡Qué ricos alimentos!</H5></Link><br/>
            <Link to="/U4actividad_5" target="_blank"><H5>- Contando hacia la cima</H5></Link><br/>
            <Link to="/U4actividad_6" target="_blank"><H5>- El jardín de mi mamá</H5></Link><br/>
            <Link to="/U4actividad_7" target="_blank"><H5>- ¡Qué ricos frutos y vegetales!</H5></Link><br/>
        </div>
    )
}

export default unidad4
