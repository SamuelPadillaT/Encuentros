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
//import unidad 4
import U4a1 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU4/a1/u4a1";
import U4a2 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU4/a2/u4a2";
import U4a3 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU4/a3/u4a3";
import U4a4 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU4/a4/u4a4";
import U4a5 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU4/a5/u4a5";
import U4a6 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU4/a6/u4a6";
import U4a7 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU4/a7/u4a7";
//import unidad 5
import U5a1 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU5/a1/u5a1";
import U5a2 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU5/a2/u5a2";
import U5a3 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU5/a3/u5a3";
import U5a4 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU5/a4/u5a4";
import U5a5 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU5/a5/u5a5";
import U5a6 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU5/a6/u5a6";
import U5a7 from "./components/home/homeAdmin/components/contenido/actividades/actividadesU5/a7/u5a7";

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

            <Route path="/U4actividad_1" element={<U4a1/>} />
            <Route path="/U4actividad_2" element={<U4a2/>} />
            <Route path="/U4actividad_3" element={<U4a3/>} />
            <Route path="/U4actividad_4" element={<U4a4/>} />
            <Route path="/U4actividad_5" element={<U4a5/>} />
            <Route path="/U4actividad_6" element={<U4a6/>} />
            <Route path="/U4actividad_7" element={<U4a7/>} />

            <Route path="/U5actividad_1" element={<U5a1/>} />
            <Route path="/U5actividad_2" element={<U5a2/>} />
            <Route path="/U5actividad_3" element={<U5a3/>} />
            <Route path="/U5actividad_4" element={<U5a4/>} />
            <Route path="/U5actividad_5" element={<U5a5/>} />
            <Route path="/U5actividad_6" element={<U5a6/>} />
            <Route path="/U5actividad_7" element={<U5a7/>} />
            
        </Routes>
    );
}
export default App;