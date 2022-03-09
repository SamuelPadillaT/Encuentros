import React, { useState} from 'react';
import Login from './components/login/login'
import Home from './components/home/homeAdmin/home'
import firebaseApp from './components/firebase/credenciales'
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//Import unidad 1
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
//import unidad 2
import U2a1 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU2/a1/u2a1";
import U2a2 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU2/a2/u2a2";
import U2a3 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU2/a3/u2a3";
import U2a4 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU2/a4/u2a4";
import U2a5 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU2/a5/u2a5";
import U2a6 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU2/a6/u2a6";
import U2a7 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU2/a7/u2a7";
//import unidad 3
import U3a1 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU3/a1/u3a1";
import U3a2 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU3/a2/u3a2";
import U3a3 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU3/a3/u3a3";
import U3a4 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU3/a4/u3a4";
import U3a5 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU3/a5/u3a5";
import U3a6 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU3/a6/u3a6";
import U3a7 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU3/a7/u3a7";
import U3a8 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU3/a8/u3a8";


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

            <Route path="/U2actividad_1" element={<U2a1/>} />
            <Route path="/U2actividad_2" element={<U2a2/>} />
            <Route path="/U2actividad_3" element={<U2a3/>} />
            <Route path="/U2actividad_4" element={<U2a4/>} />
            <Route path="/U2actividad_5" element={<U2a5/>} />
            <Route path="/U2actividad_6" element={<U2a6/>} />
            <Route path="/U2actividad_7" element={<U2a7/>} />

            <Route path="/U3actividad_1" element={<U3a1/>} />
            <Route path="/U3actividad_2" element={<U3a2/>} />
            <Route path="/U3actividad_3" element={<U3a3/>} />
            <Route path="/U3actividad_4" element={<U3a4/>} />
            <Route path="/U3actividad_5" element={<U3a5/>} />
            <Route path="/U3actividad_6" element={<U3a6/>} />
            <Route path="/U3actividad_7" element={<U3a7/>} />
            <Route path="/U3actividad_8" element={<U3a8/>} />
        </Routes>
    );
}
export default App;