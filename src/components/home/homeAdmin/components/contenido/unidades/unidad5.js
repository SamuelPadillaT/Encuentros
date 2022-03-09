import React from 'react'
import {Div, H3, H4, H5} from '../styles';
import { Link } from "react-router-dom";
const unidad5 = () => {
    return (
        <div>
            <H4>Exploremos nuevos horizontes a través de la cultura (Temario)</H4><br/>
            <Link to="/U5actividad_1" target="_blank"><H5>- ¡Estoy viajando!</H5></Link><br/>
            <Link to="/U5actividad_2" target="_blank"><H5>- Exploremos otros países</H5></Link><br/>
            <Link to="/U5actividad_3" target="_blank"><H5>- Juguemos con los ritmos</H5></Link><br/>
            <Link to="/U5actividad_4" target="_blank"><H5>- Fiestas, celebraciones y estaciones</H5></Link><br/>
            <Link to="/U5actividad_5" target="_blank"><H5>- Construyamos frases con el alfabeto</H5></Link><br/>
            <Link to="/U5actividad_6" target="_blank"><H5>- Recordemos los números del 1 al 50</H5></Link><br/>
            <Link to="/U5actividad_7" target="_blank"><H5>- El tic-tac del reloj</H5></Link><br/>
        </div>
    )
}

export default unidad5
