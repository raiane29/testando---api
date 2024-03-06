//um objeto para lidar com as promisses e pegar algo 
const axios = require('axios')

async function Api(){
    const response = await axios.get('https://api.dicebear.com')
    const estilo = await `${response}/7.x/thumbs/png`
    return estilo.data
}

test('Verifica dados obtidos da API', async ()=>{
    const dados = await Api()
        expect(dados).toBeDefined()
    
})