import styled from 'styled-components';

const Cont = styled.div`
background: #2E86C1;
`

const Header = styled.header`
background: #2E86C1;
opacity: 0.8;
display: inline-block;
width: 100%;
height: 10%;
& img {
    display: inline-block;
    position: relative;
    left: 2%;
}
& h2{
    display: inline-block;
    position: relative;
    left: 38%;
    color: #FFF;

    
}
& nav {
    display: inline-block;
    position: relative;
    left: 70%;
}
}
& ul{
    color: #2E86C1;
}
& li{
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 2px;
    background-color: #2E86C1;
    border-radius: 5px;

}
& a{
    color: #fff;
    background-color: #2E86C1;
`

const Div = styled.div`
background-image: url("https://media.istockphoto.com/vectors/happy-kids-cartoon-with-colorful-balloons-vector-id962028084");

height: 500px;
`

const Form = styled.form`
display: inline-block;
padding: 30px;
opacity: 0.9;
background-color: white;
position: relative;
left: 43%;
top: 20%;
border-radius: 3px;
& h2{
    position: relative;
    
    left: 30%;
    font-family: cursive;
}
& h3{
    font-family: cursive;
}
& button{
    color: #000;
    font-family: cursive;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #000;
    border-radius: 3px;

    position: relative;
    left: 14%;
}
`

const Input = styled.input`
 
`

const Footer = styled.footer`
background: #2E86C1;
opacity: 0.8;
height: 90px;

& p{
    display: inline-block;
    position: relative;
    left: 43%;
}

`

export {Cont, Header, Div, Form, Input, Footer}