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

const H3 = styled.h3`
display: inline-block;
padding: 0;
margin:0;
position: relative;
left: 10px;
`

const H4 = styled.h4`
display: inline-block;
padding: 0;
margin:0;
position: relative;
left: 40px;
`

const H5 = styled.h5`
display: inline-block;
padding: 0;
margin:0;
position: relative;
left: 40px;

`

export {Div, H3, H4, H5}