import React from 'react'
import {Div, H3, H4, H5} from '../styles';
import { Link } from "react-router-dom";

const unidad2 = () => {
    return (
        <div>
            <H4>Tengo una familia que me quiere (Temario)</H4><br/>
            <Link to="/U2actividad_1" target="_blank"><H5>- Tengo una familia que me quiere</H5></Link><br/>
            <Link to="/U2actividad_2" target="_blank"><H5>- ¡Huy, qué rico! ¡Cuántas frutas!</H5></Link><br/>
            <Link to="/U2actividad_3" target="_blank"><H5>- ¿Bombero o policía?</H5></Link><br/>
            <Link to="/U2actividad_4" target="_blank"><H5>- Juego con las letras</H5></Link><br/>
            <Link to="/U2actividad_5" target="_blank"><H5>- Mi amigo Pingüinín descubre nuevos colores y figuras</H5></Link><br/>
            <Link to="/U2actividad_5" target="_blank"><H5>- Saltando y contando</H5></Link><br/>
            <Link to="/U2actividad_5" target="_blank"><H5>- Caminos del tren</H5></Link><br/>
        </div>
    )
}

export default unidad2
