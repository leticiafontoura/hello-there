import VemAi from './assets/images/vem-ai.gif'

function Home() {
  return (
    <main className='home-page main-container'>
      <article>
        <h1>Boas vindas, jovem Padawan!</h1>
        <p>
          Esse é um projeto com a temática Star Wars. A ideia é consumir a api{' '}
          <a
            href='https://swapi.dev/'
            target='_blank'
            referrerPolicy='no-referrer'
          >
            swapi
          </a>{' '}
          e exibir as informações principais das pessoas e planetas desse
          maravilhoso universo. Também é possível marcar os seus itens favoritos
          e visualizá-los na seção "favorites".{' '}
        </p>
        <p>O projeto tem como base Vite + React + Typescript.</p>
        <p>
          Para gerenciar as requisições e a persistência de dados, escolhi
          utilizar o{' '}
          <a
            href='https://tanstack.com/query/latest'
            target='_blank'
            referrerPolicy='no-referrer'
          >
            React Query
          </a>
          . Por quê? Bem, veja algumas das vantagens e diga-me você o que acha
          :D
        </p>
        <ul>
          <li>
            - os status de 'loading', 'success' e 'error', além dos dados
            recuperados pela requisição, são fornecidos automaticamente por ele,
            sem complicações.
          </li>
          <li>
            - cacheamento! aqui nesse caso, como a api não é algo que fica
            mudando com frequência, não tem porquê uma requisição de personagens
            ser feita toda vez que entro na página 1 ou 2. uma vez visitadas, as
            informações ficam em cache, disponíveis para uso sem necessidade de
            chamar de novo novamente mais uma vez a api. ele faz esse
            cacheamento a partir de queries que você passa para o hook. por
            exemplo, a página 1 de personagens chama /people/1, então eu passo
            esse valor como query. se eu entrar na página 1 de novo, ta-dáaa,
            sem nova requisão! os dados já estão lá. ^^
          </li>
          <li>
            - mas caaaso você precise que as chamadas sejam feitas toda vez, ou
            de x em x tempo, é super possível também.
          </li>
        </ul>
        <p>
          Para estilos, segui com o bom e velho maravilhoso sass. Criei duas
          folhas de estilo com variáveis para serem utilizadas em todo o
          projeto, com as cores e tamanhos principais que foram definidos por
          mim.
        </p>
        <p>
          E a arquitetura, hein? Achei interessante aproveitar a oportunidade
          para colocar mais em prática os conceitos do{' '}
          <a
            href='https://feature-sliced.design/lander'
            target='_blank'
            referrerPolicy='no-referrer'
          >
            FSD - feature-sliced design
          </a>
          . Vou confessar que não foi tão simples e tive que fazer algumas
          mudanças ao longo do desenvolvimento. Principalmente porque as páginas
          meio que são as features, então pensa.. Mas acho que deu certo. Com a
          organização focada em funções (features), a manutenção e
          escalabilidade acabam sendo mais fáceis de lidar.
        </p>
        <p>
          Acessibilidade, acessibilidade, acessibilidade! Eu sei que às vezes é
          difícil priorizar a acessibilidade no código, então aqui aproveitei
          pra explorar bem isso.
        </p>
        <p>Mobile first em first lugar, hein. :P</p>
        <p>E sobre os testes...</p>
        <img src={VemAi} alt='gif vem ai' width={200} />
        <p>
          É isso! Pela atenção obrigada, e caso queira ver o código que gerou
          tudo isso aqui, fique{' '}
          <a
            target='_blank'
            referrerPolicy='no-referrer'
            href='https://github.com/leticiafontoura/hello-there'
          >
            à vontade.
          </a>
        </p>
      </article>
    </main>
  )
}

export default Home
