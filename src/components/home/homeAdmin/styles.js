import styled from 'styled-components';

const Cont = styled.div`
background: #5DADE2;
`

const Header = styled.header`
background: #5DADE2;
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
& h4{
    display: inline-block;
    color: #FFF;
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
    left: 65%;
}
`

const Div = styled.div`
background: #D6EAF8;
& h3{
    
}
`

const Nav = styled.div`
background: #21618C;
opacity = 0.7;
& button{
    font-family: cursive;
    display: inline-block;
    padding: 5px;
    border: 2px solid #000;
    border-radius: 3px;
    margin: 3px
}


`

const Contenido = styled.div`

`


const Footer = styled.footer`
background: #5DADE2;
opacity: 0.8;
height: 90px;

& p{
    display: inline-block;
    position: relative;
    left: 43%;
}

`

export {Cont, Header, Div, Nav, Contenido, Footer}