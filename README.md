Roda com o clássico ``npm run dev`` :D

# Boas-vindas, jovem Padawan!

Esse é um projeto com a temática Star Wars. A ideia é consumir a API  
[swapi](https://swapi.dev/) e exibir as informações principais das pessoas e planetas desse maravilhoso universo.  
Também é possível marcar os seus itens favoritos e visualizá-los na seção "favorites".  

O projeto tem como base **Vite + React + TypeScript**.

## Por que React Query?

Para gerenciar as requisições e a persistência de dados, escolhi utilizar o  
[React Query](https://tanstack.com/query/latest). Por quê? Bem, veja algumas das vantagens e diga-me você o que acha :D  

- **Estados automáticos**  
  Os status de `'loading'`, `'success'` e `'error'`, além dos dados recuperados pela requisição, são fornecidos automaticamente por ele, sem complicações.  

- **Cacheamento!**  
  Aqui, como a API não é algo que muda com frequência, não há necessidade de refazer a requisição de personagens toda vez que entro na página 1 ou 2.  
  Uma vez visitadas, as informações ficam **em cache**, disponíveis para uso sem chamar a API de novo.  
  O cacheamento é feito a partir das **queries** passadas para o hook.  
  Exemplo: a página 1 de personagens chama `/people/1`, então eu passo esse valor como query.  
  Se eu entrar na página 1 de novo... *ta-dá!* 🎉 Sem nova requisição!  

- **Revalidação automática**  
  Mas caso você precise que as chamadas sejam feitas toda vez, ou de **x em x tempo**, é super possível também.

## Estilização  

Para estilos, segui com o bom e velho **Sass**.  
Criei duas folhas de estilo com **variáveis** para serem utilizadas em todo o projeto, com as **cores e tamanhos principais** definidos por mim.

## Arquitetura  

E a arquitetura, hein? Achei interessante aproveitar a oportunidade para colocar mais em prática os conceitos do  
[FSD - Feature-Sliced Design](https://feature-sliced.design/lander).  

Vou confessar que não foi tão simples e tive que fazer algumas mudanças ao longo do desenvolvimento.  
Principalmente porque as páginas meio que são as **features**, então pensa...  
Mas acho que deu certo! Com a organização focada em **funções (features)**, a manutenção e escalabilidade acabam sendo mais fáceis de lidar.

## Acessibilidade e Responsividade  

- **Acessibilidade, acessibilidade, acessibilidade!**  
  Eu sei que às vezes é difícil priorizar a acessibilidade no código, então aqui aproveitei pra explorar bem isso.  

- **Mobile first** em *first lugar*, hein. :P  

## E sobre os testes...  

![vemai](./src/assets/images/vem-ai.gif)  

## É isso!  

Pela atenção, obrigada!  
Caso queira ver o código que gerou tudo isso aqui, fique **[à vontade](https://github.com/leticiafontoura/hello-there)**. 🚀
