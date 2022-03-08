import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyAA7xgGCtaHfyhtf66tcqbaqLm1bqaJ5_c",
    authDomain: "libro-encuentros.firebaseapp.com",
    projectId: "libro-encuentros",
    storageBucket: "libro-encuentros.appspot.com",
    messagingSenderId: "522142324458",
    appId: "1:522142324458:web:67e342310590418e16e993"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;