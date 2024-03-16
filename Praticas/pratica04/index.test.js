const supertest = require('supertest')
const app = require('./index')

const request = supertest(app)

describe('Testes de integração para a aplicação Express', () => {
    it('Deve retornar o status 200 para o GET /', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
    it('Deve retornar o status 201 para o POST /', async () => {
        const response = await request.post('/');
        expect(response.status).toBe(201);
    });
    it('Deve retornar o status 200 para o PUT /', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });
    it('Deve retornar o status 204 para o DELETE /', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(204);
    });
});