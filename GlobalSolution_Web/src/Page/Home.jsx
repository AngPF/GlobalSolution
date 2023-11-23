import React from 'react';
import FotoPrincipal from '../img/diabetes.png'
import Estatisticas from '../img/Estatisticas glicemia.png'
import Solucao from '../img/Logo com Slogan.png'
import IconMissao from '../img/Icon Missao.png'
import IconValores from '../img/Icon Valores.png'
import IconVisao from '../img/Icon Visao.png'
import '../Style/Home.css'

const Home = () => {
  return (
    <div>
      <div className='Home-Meio'>
        <h1 className='Titulo'>O que é Diabetes Tipo 1?</h1>
        <div className='conteudo'>
          <div className='texto1'>
            <p>
              O DM1 é uma condição autoimune em que o pâncreas produz muito pouca ou nenhuma insulina,
              ou seja, o corpo humano não consegue converter alimentos em energia, podendo levar a complicações em longo prazo.
              Em 5 a 10% dos casos de diabetes, correspondem ao tipo 1, no qual o sistema imunológico atacam as células que produzem a
              insulina. Assim, não há produção suficiente para fazer com que a glicose entre nas células, permanecendo na corrente
              sanguínea, ocasionando aumento nas taxas de glicemia.
            </p>
          </div>
          <img src={FotoPrincipal} className='foto1'></img>
        </div>


        <h2 className='Titulo'>Estatísticas:</h2>
        <div className='estatisticas'>
          <img src={Estatisticas} className='foto2'></img>
          <div className='texto2'>
            <p>Estatísticas da International Diabetes Federation mostram que o número esperado de pessoas com DM1 no mundo,
              em 2040, será de 17,43 milhões. No Brasil esse número já ultrapassa 588 mil e chagará a 1,8 milhão de pessoas em 2040</p>
          </div>
        </div>
        <div className='texto2-1'>
          <p>Outros estudos epidemiológicos apontam que o Brasil ocupa o 3º lugar no mundo no número de pessoas com diabetes tipo 1,
            com idades entre 0 e 19 anos. Pesquisadores nacionais também têm alertado que a situação é muito preocupante, com 31% da população na faixa etária
            de 13 a 19 anos apresentando uma ou mais complicações associadas ao DM1 e, com isso, os custos do tratamento podem se elevar em até 29 vezes.</p>
        </div>


        <h2 className='Titulo'>Solução:</h2>
        <div className='texto3'>
          <p>Pensando nessas estatísticas, procuramos entender a existência de algum método que auxiliasse no tratamento do Diabetes
            Tipo 1 e que trouxesse  maior qualidade de vida aos portadores da doença. </p>
          <p>A contagem de carboidratos é um método que ajuda o portador de diabetes a ter mais flexibilidade alimentar,
            pois fornece noções básicas sobre os alimentos e a interferência que os mesmos causam nos níveis de glicose no sangue.
            O principal objetivo do método é minimizar as variações glicêmicas pós-prandiais.</p>
        </div>
        <div className='solucao'>
          <div className='texto3-1'>
            <p>Tendo esse método em mente e o desejo de fornecer aos diabéticos uma maior qualidade de vida,
              surgiu a Diabyte Innovations. Solução em que o usuário conseguirá cadastrar suas refeições diárias,
              colocando a comida e a quantidade em gramas e ele retornará  as unidades de insulina necessária para a correção dos
              carboidratos presentes na refeição. Além de poder cadastrar os destros diários e ao final mostrar um gráfico da porcentagem de
              destros dentro e fora do alvo. </p>
          </div>
          <img src={Solucao} className='foto3'></img>
        </div>


        <div className="Infos">
          <h1 className='Titulo'>MISSÃO, VISÃO, VALORES</h1>

          <div className='Missao'>
            <img src={IconMissao}></img>
            <h2>MISSÃO:</h2>
            <div className='Missao-texto'>
              <p>Nossa missao é facilitar a vida das pessoas com diabetes tipo 1, oferecendo uma plataforma intuitiva e eficiente para o registro e monitoramento das medições de glicemia, proporcionando uma melhor compreensão do seu estado de saúde e promovendo uma gestão mais precisa da condição.</p>
            </div>
          </div>

          <div className='Valores'>
            <img src={IconValores}></img>
            <h2>VALORES:</h2>
            <ul>
              <p>1 - Empatia: Compreender as necessidades dos usuários e criar soluções que sejam verdadeiramente úteis e fáceis de usar.</p>
              <p>2 - Inovação: Buscar constantemente novas tecnologias e aprimoramentos para melhorar a experiência do usuário e oferecer soluções cada vez mais eficazes.</p>
              <p>3 - Transparência: Fornecer informações claras e precisas para que os usuários compreendam e gerenciem melhor sua condição de saúde.</p>
              <p>4 - Colaboração: Trabalhar em parceria com profissionais de saúde e empresas de aparelhos voltados ao tratamento da diabetes para oferecer um  suporte mais abrangente e confiável.</p>
            </ul>
          </div>

          <div className='Visao'>
            <img src={IconVisao}></img>
            <h2>VISÃO:</h2>
            <div className='caixa-texto'>
              <p> Ser a principal referência em tecnologia acessível e personalizada para pessoas com diabetes tipo 1,
                promovendo autonomia, qualidade de vida e bem-estar por meio de soluções inovadoras e confiáveis. </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;