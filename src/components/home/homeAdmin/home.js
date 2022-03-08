import React, { Component } from 'react';
import {Cont, Header, Div, Nav, Contenido, Footer} from './styles'
import firebaseApp from '../../firebase/credenciales';
import {getAuth, signOut} from "firebase/auth";
import Conten from './components/contenido/contenido'
import RegistrarCuenta from './components/registrarCuenta/registrarCuenta'
import { getDatabase, ref, child, get } from "firebase/database";

const auth = getAuth(firebaseApp);
const dbRef = ref(getDatabase(firebaseApp));

class Home extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            showContent : true,
            admin : false
        };
        

        this.setCont = this.setCont.bind(this);
        this.setRegCuenta = this.setRegCuenta.bind(this);
    }

    setCont(){
        this.setState({ showContent: true });
    }

    setRegCuenta(){
        this.setState({ showContent: false });
    }

    componentDidMount() {
        const userId = auth.currentUser.uid;
        get(child(dbRef, `users/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
              document.getElementById('studentName').innerHTML = snapshot.val().nombre;
              if(snapshot.val().rol == 'admin'){
                this.setState({ admin : true });
              }
            } else {
              console.log("No data available");
              
            }
          }).catch((error) => {
            console.error(error);
          });
    }

    render() {
        return (
            <div>
                <Cont>
                    <Header class= "header">
                        <img src = "https://w7.pngwing.com/pngs/99/33/png-transparent-apple-logo-mac-os-heart-logo-computer-wallpaper.png" width = "80px"/>
                        <h2>Lema del instituto</h2> 
                        <h4 id="studentName"></h4> 
                        <button onClick={() => signOut(auth)}>logout</button>
                    </Header>
                    
                    <Div>
                        <Nav>
                            <button onClick = {() =>this.setCont()}>Contenido</button>
                            <>{this.state.admin ? <button onClick = {() =>this.setRegCuenta()}>
                                Gestion de Cuentas</button> : null}</>
                            
                        </Nav>
                        <Contenido id="cont">
                        <>{this.state.showContent ? <Conten/> : <RegistrarCuenta/>}</>
                        </Contenido>

                    </Div>
                    
                    <Footer class = "footer">
                        <p class = "footer-p">@copyright - all rights recerved</p>
                    </Footer>
                </Cont>
            </div>
        );
    }
}

export default Home;