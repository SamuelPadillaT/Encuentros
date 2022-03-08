import React, { useState} from 'react';
import {Div, H3, H4, H5} from './styles';
import flecha from './1f53a.png';
import Unidad1 from './unidades/unidad1'
import Unidad2 from './unidades/unidad2'
import Unidad3 from './unidades/unidad3'
import Unidad4 from './unidades/unidad4'
import Unidad5 from './unidades/unidad5'


const Contenido = () => {

    const [unit, setUnit] = useState(0);
    const unidad1 = () =>{
        const elem = document.getElementById('img1');
        if(unit == 1){
            elem.style.transform = 'rotate(90deg)';
            setUnit(0);
        }else{
            elem.style.transform = 'rotate(180deg)';
            setUnit(1);
        }
    }
    const unidad2 = () =>{
        const elem = document.getElementById('img2');
        if(unit == 2){
            elem.style.transform = 'rotate(90deg)';
            setUnit(0);
        }else{
            elem.style.transform = 'rotate(180deg)';
            setUnit(2);
        }
    }
    const unidad3 = () =>{
        const elem = document.getElementById('img3');
        if(unit == 3){
            elem.style.transform = 'rotate(90deg)';
            setUnit(0);
        }else{
            elem.style.transform = 'rotate(180deg)';
            setUnit(3);
        }
    }
    const unidad4 = () =>{
        const elem = document.getElementById('img4');
        if(unit == 4){
            elem.style.transform = 'rotate(90deg)';
            setUnit(0);
        }else{
            elem.style.transform = 'rotate(180deg)';
            setUnit(4);
        }
    }
    const unidad5 = () =>{
        const elem = document.getElementById('img5');
        if(unit == 5){
            elem.style.transform = 'rotate(90deg)';
            setUnit(0);
        }else{
            elem.style.transform = 'rotate(180deg)';
            setUnit(5);
        }
    }
    return (
        <div>
            <Div>
                <img src={flecha} onClick={unidad1} id='img1'/>
                <H3>Unidad 1: Mundo propio</H3><br/>
                <>{unit == 1 ? <Unidad1/> : null}</>
            </Div>
            <Div>
                <img src={flecha} onClick={unidad2} id='img2'/>
                <H3>Unidad 2: Mundo familiar</H3><br/>
                <>{unit == 2 ? <Unidad2/> : null}</>
            </Div>
            <Div>
                <img src={flecha} onClick={unidad3} id='img3'/>
                <H3>Unidad 3: Mundo escolar</H3><br/>
                <>{unit == 3 ? <Unidad3/> : null}</>
            </Div>
            <Div>
                <img src={flecha} onClick={unidad4} id='img4'/>
                <H3>Unidad 4: Mundo natural</H3><br/>
                <>{unit == 4 ? <Unidad4/> : null}</>
            </Div>
            <Div>
                <img src={flecha} onClick={unidad5} id='img5'/>
                <H3>Unidad 5: Mundo de viajes y diversiones</H3><br/>
                <>{unit == 5 ? <Unidad5/> : null}</>
            </Div>
        </div>
    )
}

export default Contenido
