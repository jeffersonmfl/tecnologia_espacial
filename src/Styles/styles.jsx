import styled from "styled-components";

export const lightTheme = {
    corFundo:'honeydew',
    corTexto:'black',
    corTitulo:'red'
}

export const darkTheme = {
    corFundo:'gray',
    corTexto:'white',
    corTitulo:'#fffdd0'
}

export const Container = styled.div`
    background-color: ${props=>props.theme.corFundo};
    color: ${props=>props.theme.corTexto};
`

export const Button = styled.button`
    padding: 10px;
    border: none;
    color: White;
    margin: 10px;

`

export const TitlePage = styled.h1 `
    color: ${props=>props.theme.corTitulo};
    font-size: 20px;
`

export const InformacoesCep = styled.div`
    margin:20px;
    padding:10px;
    display:flex;
    flex-direction:column;
`
