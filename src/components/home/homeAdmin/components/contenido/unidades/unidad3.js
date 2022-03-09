import React from 'react'
import {Div, H3, H4, H5} from '../styles';
import { Link } from "react-router-dom";

const unidad3 = () => {
    return (
        <div>
            <H4>Nuevos amigos y el camino al conocimiento (Temario)</H4><br/>
            <Link to="/U3actividad_1" target="_blank"><H5>- Mi linda escuela</H5></Link><br/>
            <Link to="/U3actividad_2" target="_blank"><H5>- Sigo jugando con las letras</H5></Link><br/>
            <Link to="/U3actividad_3" target="_blank"><H5>- Sigo contando con alegría</H5></Link><br/>
            <Link to="/U3actividad_4" target="_blank"><H5>- Una docena para compartir</H5></Link><br/>
            <Link to="/U3actividad_5" target="_blank"><H5>- Los hijitos de la semana</H5></Link><br/>
            <Link to="/U3actividad_6" target="_blank"><H5>- Me transporto y me comunico</H5></Link><br/>
            <Link to="/U3actividad_7" target="_blank"><H5>- Me comunico e informo</H5></Link><br/>
            <Link to="/U3actividad_8" target="_blank"><H5>- Aprendiendo y jugando con el internet</H5></Link><br/>
        </div>
    )
}

export default unidad3
