function listaDeFoguetes(props){
    return (
        <>
        <h1>Lista de Sondas Espaciais</h1>
        <ul>
            <li>{props.fogueteValorPai[0]}</li>
            <li>{props.fogueteValorPai[1]}</li>
            <li>{props.fogueteValorPai[2]}</li>
            <li>{props.fogueteValorPai[3]}</li>
            <li>{props.fogueteValorPai[4]}</li>
            <li>{props.fogueteValorPai[5]}</li>
        </ul>
        </>
    )
}

export default listaDeFoguetes;