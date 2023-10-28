function Componente03(props){
    return(
        <>
        <h3>Componente 03</h3>
        <p>Informação enviada pelo componente pai: {props.linguagemPai}</p>

        <button onClick={props.clicoupai}> Clique Aqui </button>
        </>
    )
}

export default Componente03;