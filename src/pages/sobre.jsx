import Menu from "../Components/menu"

export default () => {
    return (
        <>
            <Menu />
            <hr />
            <h1>Página sobre</h1>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                <img src="./autor.png" width={500} />
                <div>
                    <p>Nome: Jefferson Mendes de Farias Lima</p>
                    <p>RM: 552052 </p>
                    <p>Tema: Tecnologia Espacial</p>
                    <p>Sinopse: Através da tecnologia espacial, a humanidade conquistou feitos notáveis, como o envio de 
                        sondas espaciais para estudar planetas distantes, a colocação de satélites em órbita para fins de 
                        comunicação e observação da Terra, e até mesmo o envio de astronautas à Lua. Essas realizações não 
                        apenas expandiram nosso conhecimento sobre o cosmos, mas também tiveram impactos diretos em nossa vida 
                        cotidiana, incluindo sistemas de navegação GPS, comunicações globais e monitoramento ambiental.</p>
                    <p>Frase que inspira: "O maior inimigo do conhecimento não é a ignorância, é a ilusão do conhecimento." de stephen hawking</p>
                </div>
            </div>
        </>
    )
}
