import React from 'react';
import {Cont, Header, Div, Form, Input, Footer} from './styles';
import firebaseApp from '../firebase/credenciales';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(firebaseApp);


const login  = () => {

    const loginUser = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password).then(response => {
                console.log(response);
            }).
            catch(err => window.alert(err));
    }

    function submitHandler(e){
        e.preventDefault();
        //console.log('hola');
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        console.log(email,password);
        loginUser(email,password);

    }

    return (
        <Cont>
            <Header class= "header">
                <img src = "https://w7.pngwing.com/pngs/99/33/png-transparent-apple-logo-mac-os-heart-logo-computer-wallpaper.png" width = "80px"/>
                <h2>Lema del instituto</h2> 
                <nav class = "header__nav">
                    <ul class = "header__nav__ul">
                        
                        <li class = "header__nav__ul-li-2"><a>Account</a></li>
                    </ul>
                </nav>
            </Header>
            <Div class = "login">
                
                <Form onSubmit={submitHandler}>
                    <h2 class = "login-h2">Login</h2>
                    <h3>Username</h3>
                    <Input type="email" id="email" />
                    <h3>Password:</h3>
                    <Input type="password" id="password" /><br/>
                    <button type="submit"> Submit </button>
                    
                </Form>
            </Div>
            
            <Footer class = "footer">
                <p class = "footer-p">@copyright - all rights recerved</p>
            </Footer>
        </Cont>
        
        )
}

export default login