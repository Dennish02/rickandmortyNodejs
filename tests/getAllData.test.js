const supertest = require('supertest')

import {app, server} from '../index.js'

const api = supertest(app)

 

describe(' ----------- Probar las dos peticiones ----------', function (){
    test('Comprobar que se resuelva:', async ()=>{
    await  api
        .get('/getdata')
        .expect(200)
    })
    test('Comprobar que venngan los dos datos:', async ()=>{
       const response = await  api.get('/getdata')         
       expect(response.body[0].exercise_name).toBe("Char counter")
       expect(response.body[1].exercise_name).toBe("Episode locations")    
        })
})
afterAll(()=>{
    server.close()
})