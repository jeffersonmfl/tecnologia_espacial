import Menu from '../Components/menu'
import ListaDeFoguetes from '../Components/Foguetes'; 

function ListaFoguetes (){
    let fogueteAray=['Fusca','Celta','Uno']
    return(
        <>
        <Menu/>
        <hr/>
        <ListaDeFoguetes fogueteValorPai={fogueteAray}></ListaDeFoguetes>
        </>
    )
}
export default ListaFoguetes;
