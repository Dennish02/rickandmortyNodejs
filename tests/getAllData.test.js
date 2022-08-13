const supertest = require('supertest')
import {app, server} from '../index.js'

const api = supertest(app)

 

describe(' ----------- Probar las dos peticiones ----------', function (){
    test('comprobar el tiempo de respuesta', async ()=>{
    await  api
        .get('getdata')
        .expect(200)
        .expect('Content-Type', /aplication\/json/)
    })
})
afterAll(()=>{
    server.close()
})