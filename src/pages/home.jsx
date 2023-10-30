import Menu from '../Components/menu';

export default () => {
  return (
    <>
      <Menu />
      <hr />
      <h1>Contexto histórico da corrida espacial</h1>
      <p>
        "Os soviéticos deram o primeiro passo na corrida espacial e, em 4 de outubro de 1957, foi lançado o primeiro satélite
        em órbita, o Sputnik 1. Foi esse acontecimento que deu início à corrida espacial, e o Sputnik 1 funcionou na órbita da
        Terra durante 22 dias. Nesse período, o satélite enviou sinais de rádio que foram fundamentais para o estudo do planeta.
        Pouco tempo depois do lançamento do satélite, a imprensa soviética celebrou o acontecimento como um grande marco da ciência
        soviética, e o lançamento do Sputnik 1 repercutiu no mundo todo, incluindo os Estados Unidos. O satélite soviético era uma esfera
        feita de alumínio com 58 centímetros de diâmetro e pesava cerca de 83 kg."
      </p>
      <div style={{ display: 'flex' }}>
        <img src="./sputnik.png" alt="" />
        <p>
          "Os soviéticos continuaram inovando e, um mês depois, realizaram o lançamento do Sputnik 2, que pesava 508 kg e foi responsável por
          levar o primeiro ser vivo para o espaço. Nessa ocasião, os soviéticos enviaram ao espaço a cadela Laika, que morreu 10 dias depois
          do lançamento por conta do superaquecimento da estrutura. O Sputnik 2 desintegrou-se ao entrar na atmosfera, no dia 14 de abril de 1958.
          Ao todo, a União Soviética enviou para o espaço 10 satélites designados Sputnik, e o último deles foi lançado em 25 de março de 1961.
          O Sputnik 10 enviou outra cadela para o espaço (chamada Zvezdochka), e essa, diferentemente de Laika, foi trazida para a Terra viva.
        </p>
      </div>
      <h2> Resposta da NASA</h2>
      <img src="./nasa.png" centre/>
      <p>"Em resposta ao lançamento dos Sputnik 1 e 2 realizado pelos soviéticos, os Estados Unidos anunciaram o lançamento de seu próprio satélite 
        artificial. Assim, os americanos lançaram o Explorer 1, no dia 31 de janeiro de 1958. Esse satélite foi responsável por descobrir uma região
         radiativa ao redor da Terra. Essa região ficou conhecida como Cinturão de Van Allen. O Explorer 1 parou de enviar sinais cerca de quatro meses 
         depois e entrou na atmosfera somente em março de 1970. Em seguida, ainda como parte da reação americana aos lançamentos soviéticos, foi criada 
         a National Aeronautics Space Administration, mais conhecida como NASA. Sua criação aconteceu no dia 29 de julho de 1958, durante o governo de 
         Dwight D. Eisenhower (1953-1961)."</p>
    </>
  );
};
