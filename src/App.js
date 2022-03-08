import React, { useState} from 'react';
import Login from './components/login/login'
import Home from './components/home/homeAdmin/home'
import firebaseApp from './components/firebase/credenciales'
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import U1a1 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU1/a1/u1a1";
import U1a2 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU1/a2/u1a2";
import U1a3 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU1/a3/u1a3";
import U1a4 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU1/a4/u1a4";
import U1a5 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU1/a5/u1a5";
import U1a6 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU1/a6/u1a6";
import U1a7 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU1/a7/u1a7";
import U1a8 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU1/a8/u1a8";
import U1a9 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU1/a9/u1a9";
import U1a10 from './components/home/homeAdmin/components/contenido/actividades/actividadesU1/a10/u1a10';
//Hola
const auth = getAuth(firebaseApp);

const App  = () => {
    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (userFirebase) =>{
        if(userFirebase){
            setUser(userFirebase);
        }else{
            setUser(null);
        }
    })

    return(
        <>{user ? <BrowserRouter><MyRouter/></BrowserRouter> : <Login/>}</>
    )
}

const MyRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/U1actividad_1" element={<U1a1/>} />
            <Route path="/U1actividad_2" element={<U1a2/>} />
            <Route path="/U1actividad_3" element={<U1a3/>} />
            <Route path="/U1actividad_4" element={<U1a4/>} />
            <Route path="/U1actividad_5" element={<U1a5/>} />
            <Route path="/U1actividad_6" element={<U1a6/>} />
            <Route path="/U1actividad_7" element={<U1a7/>} />
            <Route path="/U1actividad_8" element={<U1a8/>} />
            <Route path="/U1actividad_9" element={<U1a9/>} />
            <Route path="/U1actividad_10" element={<U1a10/>} />
        </Routes>
    );
}
export default App;