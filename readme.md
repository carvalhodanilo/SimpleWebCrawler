# WEB Crawler API NodeJS

 - A API desenvolvida, tem o intuito de buscar uma lista de produtos no site do Mercado Livre (https://www.mercadolivre.com.br/) e disponibilizar os resultados em um endpoint.

Bibliotecas utilizadas:
 - Express.js (Necessário para a contrução da API)
 - Body-parser (Middleware que captura o corpo da requisição e a converte num formato Json)
 - Cheerio (Utilizado para capturar os dados do corpo da página)
 - Cors (Administra o Cross Domain Origin no servidor)
 - Morgan (Middleware que captura as requisições, gerando logs para a API)
 - Request (Responsável em realizar as requisições HTTP)

## Instalação da API

### Requerimentos:
 - Necessário ter instalado versões estáveis do Node.Js / NPM

### Instalação:
 - Ao baixar o projeto, abra um terminal na pasta raiz do projeto e rode o seguinte comando para instalar as dependências:

>npm install

## Uso da API

### Testes: 
>npm run test

### API:
>npm start

Se tudo estiver certo, irá aparecer a seguinte mensagem no terminal:
>API funcionando corretamente em http://localhost:3000

## Rotas 
Ao acessar http://localhost:3000 (utilizando POSTMAN, INSOMNIA, etc) através do método GET, terá o seguinte retorno:

>{
>        title: "Node Express API - WEB Crawler",
>        author: "Danilo Soares de Carvalho",
>        version: "0.0.1"
>}

Ao acessar http://localhost:3000/products através do método POST, deverá ser enviado no corpo da requisição, um JSON como o seguinte exemplo:

>{
>        "search": cadeado, // Produto a ser buscado.
>        "limit": 10        // Limite de quantidade de produtos desejado.
>}

A resposta da API será como a seguinte:

>{
>  "success": true,                        // Sempre é retornado, indica o sucesso da busca.
>  "msg": "Busca realizada com sucesso!",  // Sempre é retornado, mensagem descrevendo o resultado.
>  "response": [                           // Response é retornado somente se houver dados.
>    {
>      "name": "Cadeado De Latão Lt-30 30mm Pado",
>      "link": "https://produto.mercadolivre.com.br/LB-971589589-cadeado-de-l...",
>      "price": "19.90",
>      "store": null,
>      "state": null
>    },
>    {
>      "name": "Cadeado Segurança Aço Reforçado Com Alarme Sonoro Casa Moto",
>      "link": "https://produto.mercadolivre.com.br/MLB-1018677398-cadeado-seg...",
>      "price": "62.10",
>      "store": null,
>      "state": null
>    },
>    ...
>}




