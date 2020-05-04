const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig')

describe('server', () => {
    it('sets the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })
});


describe('register', () => {

  it('registers successfully with res 201', () => {
    return request(server)
      .post('/api/auth/register')
      .send({username: 'Rand', password: 'Hot4Nance'})
      .then(res => {
        expect(res.status).toBe(201)
      });
  });

  it('returns json', () => {
    return request(server)
    .post('/api/auth/register')
    .send({username: 'Brett', password: 'FingerGunz'})
    .set('Accept', 'application/json')
    .then(res => {
      expect(res.type).toBe('application/json')
    });
  });

});


describe('login', () => {

  it('logs in successfully with res 200', () => {
    return request(server)
      .post('/api/auth/register')
      .send({username: 'Jeff', password: 'CrispyBoys'})
      .then(res => {
        expect(res.status).toBe(201)
      });
  });

  it('logs in unsuccessfully with res 401', () => {
    return request(server)
      .post('/api/auth/register')
      .send({username: 'Jeff', password: 'SillyGoose'})
      .then(res => {
        expect(res.status).toBe(401)
      });
  });

  it('checks returns json on login', function() {
    return request(server)
    .post('/api/auth/login')
    .send({username: 'Jeff', password: 'CrispyBoys'})
    .then(res => {
      expect(res.type).toBe('application/json')
    });
  });

});
