import Menu from '../Components/menu'
import listaDeFoguetes from '../Components/Foguetes';

function listaDeFoguetes (){
    let carroAray=['Fusca','Celta','Uno']
    return(
        <>
        <Menu/>
        <hr/>
        <listaDeFoguetes carroValorPai={carroAray}></listaDeFoguetes>
        </>
    )
}
export default listaDeFoguetes;
