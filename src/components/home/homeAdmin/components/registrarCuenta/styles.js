import styled from 'styled-components';

const Div = styled.div`
background: #D6EAF8;
& img{
    width: 20px;
    height: 20px;
    position relative;
    top: 5px;
    transform:rotate(90deg);
}
`
const Form = styled.form`

& h4, h3{
    display: inline-block;
}
`


const Input = styled.input`
 
`

export {Div, Form, Input}