### WEB Crawler API NodeJS

 - A API desenvolvida, tem o intuito de buscar uma lista de produtos no site do Mercado Livre (https://www.mercadolivre.com.br/) e disponibilizar os resultados em um endpoint.

Bibliotecas utilizadas:
 - Express.js (Necessário para a contrução da API)
 - Body-parser (Middleware que captura o corpo da requisição e a converte num formato Json)
 - Cheerio (Utilizado para capturar os dados do corpo da página)
 - Cors (Administra o Cross Domain Origin no servidor)
 - Morgan (Middleware que captura as requisições, gerando logs para a API)
 - Request (Responsável em realizar as requisições HTTP)

## Instalação da API

Requerimentos:
 - Necessário ter instalado versões estáveis do Node.Js / NPM

Instalação:
 - Ao baixar o projeto, abra um terminal na pasta raiz do projeto e rode o seguinte comando para instalar as dependências:

>npm install

### Uso

 - Testes: 
>npm run test

 - API:
>npm start

Se tudo estiver certo, irá aparecer a seguinte mensagem no terminal:
>Api funcionando corretamente em http://localhost:3000

Para realizar as requisições, é necessário um programa auxiliar 


