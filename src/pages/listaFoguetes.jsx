import Menu from '../Components/menu'
import ListaDeFoguetes from '../Components/Foguetes'; 

function ListaFoguetes (){
    let fogueteAray=['Sputnik 1','Sputnik 2','LUNA','RANGER', 'SURVEYOR', 'LUNAR ORBITER ']
    return(
        <>
        <Menu/>
        <hr/>
        <ListaDeFoguetes fogueteValorPai={fogueteAray}></ListaDeFoguetes>


        <h1>Sondas Soviética</h1>
        <div  style={{ display: 'flex' }}>
        <img src="./sondas_URSS.jpg"/>
        </div>

        <h2>Sondas Americanas</h2>
        <div  style={{ display: 'flex' }}>
        <img src="./sondas_USA.png"/>
        </div>

        </>
    )
}
export default ListaFoguetes;
