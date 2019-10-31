const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Vineet',
        email: 'vineet.vinayakumar@gmail.com',
        password: 'Mypass777'
    }).expect(201)
})