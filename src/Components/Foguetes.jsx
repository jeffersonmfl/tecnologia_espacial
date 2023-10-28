function Tipofoguetes(props){
    return (
        <>
        <h1>Lista de Foguetes</h1>
        <ul>
            <li>{props.carroValorPai[0]}</li>
            <li>{props.carroValorPai[1]}</li>
            <li>{props.carroValorPai[2]}</li>
        </ul>
        </>
    )
}

export default listaDeFoguetes;