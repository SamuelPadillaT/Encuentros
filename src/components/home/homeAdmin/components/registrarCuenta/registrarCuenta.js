import React, { Component } from 'react';
import {Div, Form, Input} from './styles';
import firebaseApp from '../../../../firebase/credenciales';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, set, child, get } from "firebase/database";
import flecha from './1f53a.png';
import MaterialTable from 'material-table';

import { useControlled } from '@material-ui/core';



const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const dbRef = ref(getDatabase(firebaseApp));

class registrarCuenta extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            dataLoaded: false,
            data: [],
            editData: {}
          };

        this.loginUser = this.loginUser.bind(this);
        this.registro = this.registro.bind(this);
        this.modificar = this.modificar.bind(this);
        
        this.columnas = [{title:'Nombre',
                            field:'nombre'},
                        {title:'Apellido',
                            field:'apellido'},
                        {title:'ID',
                            field:'id'},
                        {title:'Rol',
                            field:'rol'},
                        {title:'Email',
                            field:'email'},
                        {title:'Password',
                            field:'password'},
                        {title: 'UID',
                            field: 'uid'}];
        
        

    }

    async loginUser(email, password){
        await signInWithEmailAndPassword(auth, email, password).then(response => {
                console.log(response);
            }).
            catch(err => window.alert(err));
    }

    async registro(e){
        e.preventDefault();

        const userId = auth.currentUser.uid;
        
        const currentEmail = await get(child(dbRef, `users/${userId}/email`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                //currentEmail = snapshot.val();
                return snapshot.val();
                
            } else {
              console.log("No data available");
              return null;
            }
          }).catch((error) => {
            console.error(error);
          });
        const currentPass = await get(child(dbRef, `users/${userId}/password`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                //currentPass = snapshot.val();
                return snapshot.val();
                
            } else {
                console.log("No data available");
                return null;
            }
          }).catch((error) => {
            console.error(error);
          });
          console.log(currentEmail);
          console.log(currentPass);
        
        if(currentEmail != null && currentPass != null){
            console.log('entre')
            const Nombre = e.target.elements.nombre.value;
            const Apellido = e.target.elements.apellido.value;
            const Id = e.target.elements.id.value;
            const Rol = e.target.elements.rol.value;
            const Email = e.target.elements.email.value;
            const Password = e.target.elements.password.value;

            const infoUser = await createUserWithEmailAndPassword(auth, Email,
                Password).then((userFirebase) => {
                    return userFirebase;
            }).catch(err => window.alert(err));
            console.log(infoUser.user.uid);
            const userId1 = auth.currentUser.uid;
            if(Rol == 'user'){
                await set(ref(database, 'users/' + userId1), {
                    nombre: Nombre,
                    apellido: Apellido,
                    id: Id,
                    rol: Rol,
                    email: Email,
                    password: Password
                });
            }else{
                await set(ref(database, 'users/' + userId1), {
                    nombre: Nombre,
                    apellido: Apellido,
                    id: Id,
                    rol: Rol,
                    email: Email,
                    password: Password,
                    numeroCuentas: 0,
                    usuariosAsociados: null
                });
            }
            const userId2 = auth.currentUser.uid;

            await this.loginUser(currentEmail,currentPass);

            const userId3 = auth.currentUser.uid;

            const numCuentas = await get(child(dbRef, `users/${userId3}/numeroCuentas`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val()+1);
                    //currentPass = snapshot.val();
                    return snapshot.val()+1;
                    
                } else {
                    console.log("No data available");
                    return null;
                }
              }).catch((error) => {
                console.error(error);
              });
              
              
            set(ref(database, 'users/' + userId3 + '/usuariosAsociados/' + numCuentas ), {
                
                userId2

            });

            const admin = await get(child(dbRef, `users/${userId3}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    //currentPass = snapshot.val();
                    return snapshot.val();
                    
                } else {
                    console.log("No data available");
                    return null;
                }
              }).catch((error) => {
                console.error(error);
              });
              admin.numeroCuentas = admin.numeroCuentas +1;
              set(ref(database, 'users/' + userId3  ), {
                apellido: admin.apellido,
                email: admin.email,
                id: admin.id,
                nombre: admin.nombre,
                numeroCuentas: admin.numeroCuentas,
                password: admin.password,
                rol: admin.rol,
                usuariosAsociados: admin.usuariosAsociados
                

            });
        }
    }

    

    async modificar(e) {
        e.preventDefault();
        const typeAccount = this.state.editData.rol;
        
        
        if(this.state.editData != null){
            if(document.getElementById('nombre2').value != ''){
                this.state.editData.nombre = document.getElementById('nombre2').value;
            }
            if(document.getElementById('apellido2').value != ''){
                this.state.editData.apellido = document.getElementById('apellido2').value;
            }
            if(document.getElementById('rol2').value != ""){
                this.state.editData.rol = document.getElementById('rol2').value;
            }
            if(document.getElementById('email2').value != ''){
                this.state.editData.email = document.getElementById('email2').value;
            }
            if(document.getElementById('password2').value != ''){
                this.state.editData.password = document.getElementById('password2').value;
            }
            console.log(this.state.editData);
            const userId = this.state.editData.uid;
            console.log(userId);
            if(typeAccount == 'user'){
                await set(ref(database, 'users/' + userId), {
                    nombre: this.state.editData.nombre,
                    apellido: this.state.editData.password,
                    id: this.state.editData.id,
                    rol: this.state.editData.rol,
                    email: this.state.editData.email,
                    password: this.state.editData.password,
                    
                });
            }else{

                const admin = await get(child(dbRef, `users/${userId}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log(snapshot.val());
                        return snapshot.val();
                        
                    } else {
                        console.log("No data available");
                        return null;
                    }
                  }).catch((error) => {
                    console.error(error);
                  });
                  await set(ref(database, 'users/' + userId), {
                    nombre: this.state.editData.nombre,
                    apellido: this.state.editData.password,
                    id: this.state.editData.id,
                    rol: this.state.editData.rol,
                    email: this.state.editData.email,
                    password: this.state.editData.password,
                    numeroCuentas: admin.numeroCuentas,
                    usuariosAsociados: admin.usuariosAsociados
                    
                });
            }
            

            
        }else{
            alert('Escoja un usuario para modificar');
        }
    
        
    }

    async componentDidMount() {
        var dataTemp = [];
        const userId = auth.currentUser.uid;

        const admin = await get(child(dbRef, `users/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                const currentPass = snapshot.val();
                const dato = {nombre: currentPass.nombre,
                    apellido: currentPass.apellido,
                    id: currentPass.id,
                    rol: currentPass.rol,
                    email: currentPass.email,
                    password: currentPass.password,
                    uid: userId}
                dataTemp.push(dato);
                return snapshot.val();
                
            } else {
                console.log("No data available");
                return null;
            }
          }).catch((error) => {
            console.error(error);
          });
          
        
        
        for(var i = 1; i < admin.numeroCuentas + 1; i++){
            const userId = admin.usuariosAsociados[i].userId2;
            var esAdmin = 0;
            
            const user = await get(child(dbRef, `users/${userId}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    const currentPass = snapshot.val();
                    const dato2 = {nombre: currentPass.nombre,
                        apellido: currentPass.apellido,
                        id: currentPass.id,
                        rol: currentPass.rol,
                        email: currentPass.email,
                        password: currentPass.password,
                        uid: userId}
                    dataTemp.push(dato2);
                    if(currentPass.rol == 'admin'){
                        esAdmin = 1;
                    }
                    return snapshot.val();
                    
                } else {
                    console.log("No data available");
                    return null;
                }
              }).catch((error) => {
                console.error(error);
              });
              if(esAdmin == 1){
                  console.log('es admin')
                for(var j = 1; j < user.numeroCuentas + 1; j++){
                    const userId2 = user.usuariosAsociados[j].userId2;
                    console.log(userId2);
                    const user2 = await get(child(dbRef, `users/${userId2}`)).then((snapshot) => {
                        if (snapshot.exists()) {
                            console.log(snapshot.val());
                            const currentPass = snapshot.val();
                            const dato2 = {nombre: currentPass.nombre,
                                apellido: currentPass.apellido,
                                id: currentPass.id,
                                rol: currentPass.rol,
                                email: currentPass.email,
                                password: currentPass.password,
                                uid: userId}
                            dataTemp.push(dato2);
                            
                            return snapshot.val();
                            
                        } else {
                            console.log("No data available");
                            return null;
                        }
                      }).catch((error) => {
                        console.error(error);
                      });
                }
              } 
              
        }
        console.log(this.columnas);
        console.log(dataTemp);
        
        if(! this.state.dataLoaded){
            this.setState({dataLoaded: true, data : dataTemp});
        }
        

    }

    

    render() {
        return (
            <div>
            <Div>
                <Form onSubmit={this.registro}>
                    <img src={flecha} id='img1'/>
                    <h3>Registrar una cuenta</h3><br></br>
                    <h4>Nombres: </h4>
                    <Input type="text" id="nombre" />
                    <h4>Apellidos: </h4>
                    <Input type="text" id="apellido" /><br/>
                    <h4>ID: </h4>
                    <Input type="number" id="id" />
                    <h4>rol: </h4>
                    <select id="rol">
                        <option value="admin">Administrador</option>
                        <option value="user">Usuario</option>
                    </select>
                    <h4>Email: </h4>
                    <Input type="email" id="email" />
                    <h4>Password: </h4>
                    <Input type="password" id="password" /><br/>
                    <button type="submit"> Registrar </button>
                </Form>
            </Div>
            <Div>
                <Form>
                    <img src={flecha} id='img1'/>
                    <h3>buscar y modificar una cuenta</h3><br></br>
                    <MaterialTable
                        columns={this.columnas}
                        data={this.state.data}
                        title={'Usuarios'}
                        actions={[
                            {
                                icon: 'E',
                                tooltip: 'Editar',
                                onClick: (evento, rowData) => {
                                    document.getElementById('cName').innerHTML = '('+rowData.nombre+'):';
                                    document.getElementById('cLastN').innerHTML = '('+rowData.apellido+'):';
                                    document.getElementById('cRol').innerHTML = '('+rowData.rol+'):';
                                    document.getElementById('cEmail').innerHTML = '('+rowData.email+'):';
                                    document.getElementById('cPass').innerHTML = '('+rowData.password+'):';
                                    this.setState({editData: rowData});
                                    
                                }
                            }
                        ]}
                    />
                    <h4>Nombres</h4><h4 id='cName'>(): </h4>
                    <Input type="text" id="nombre2" />
                    <h4>Apellidos</h4><h4 id='cLastN'>(): </h4>
                    <Input type="text" id="apellido2" /><br/>
                    
                    <h4>rol</h4><h4 id='cRol'>(): </h4>
                    <select id="rol2">
                        <option value="">----</option>
                        <option value="admin">Administrador</option>
                        <option value="user">Usuario</option>
                    </select>
                    <h4>Email</h4><h4 id='cEmail'>(): </h4>
                    <Input type="email" id="email2" /><br/>
                    <h4>Password</h4><h4 id='cPass'>(): </h4>
                    <Input type="text" id="password2" /><br/>
                    <button onClick={this.modificar}> Modificar </button><br/>
                    
                </Form>
            </Div>
        </div>
        );
    }
}



export default registrarCuenta;
