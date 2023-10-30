function listaDeFoguetes(props){
    return (
        <>
        <h1>Lista de Foguetes</h1>
        <ul>
            <li>{props.fogueteValorPai[0]}</li>
            <li>{props.fogueteValorPai[1]}</li>
            <li>{props.fogueteValorPai[2]}</li>
        </ul>
        </>
    )
}

export default listaDeFoguetes;