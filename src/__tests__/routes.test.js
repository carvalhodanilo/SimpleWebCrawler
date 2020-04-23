const server = require('../server.js');
var request = require('supertest');

describe('Inicio dos testes', () => {

   test('Acessa a rota da home e verifica o conteúdo que é exibido ', async () => {
      const response = await request(server).get('/')
      expect(response.text).toContain('{"title":"Node Express API - WEB Crawler","author":"Danilo Soares de Carvalho","version":"0.0.1"}');
      expect(response.status).toEqual(200);
   });

   test('Acessa a rota /products e busca por um produto (parametros corretos)', async () => {
      let data = {"search": "carro", "limit": 5 }

      const response = await request(server).post('/products').send(data)
      expect(response.body.success).toEqual(true)
      expect(response.status).toEqual(200);
   });

   test('Acessa a rota /products e busca por um produto (parametros corretos, busca não encontra resultado)', async () => {
      let data = {"search": "e285306a858b11eabc550242ac130003", "limit": 5 }

      const response = await request(server).post('/products').send(data)
      expect(response.body.success).toEqual(false)
      expect(response.status).toEqual(404);
   });   

   test('Acessa a rota /products e busca por um produto (chave de busca incorreta)', async () => {
      let data = {"busca": "carro", "limit": 5 }

      const response = await request(server).post('/products').send(data)
      expect(response.body.success).toEqual(false)
      expect(response.status).toEqual(400);
   });   

   test('Acessa a rota /products e busca por um produto (neste caso, o site do mercado' +  
      'livre retorna status 200 porém nao encontra um produto com o valor buscado, o correto seria 404.)', async () => {
      let data = {"search": 3, "limit": 5 }

      const response = await request(server).post('/products').send(data)
      expect(response.body.success).toEqual(false)
      expect(response.status).toEqual(404);
   });   

   test('Acessa a rota /products e busca por um produto (falta o parametro "limit" no corpo)', async () => {
      let data = {"search": 3 }

      const response = await request(server).post('/products').send(data)
      expect(response.body.success).toEqual(false)
      expect(response.status).toEqual(400);
   });  
   
   test('Acessa a rota /products e busca por um produto (falta o parametro "search" no corpo)', async () => {
      let data = {"limit": 5 }

      const response = await request(server).post('/products').send(data)
      expect(response.body.success).toEqual(false)
      expect(response.status).toEqual(400);
   });

   test('Acessa a rota /products e busca por um produto (parâmetro "limit" não é um número)', async () => {
      let data = {"search": 3, "limit": "xxx" }

      const response = await request(server).post('/products').send(data)
      expect(response.body.success).toEqual(false)
      expect(response.status).toEqual(400);
   });   
})