import axios from 'axios';

let resultado2 = []
let variable = []
const axiosData = async (url) => {

    try {
        let { data } = await axios.get(url);
        return (data)

        // console.log(resultado2);
    } catch (error) {
        return error;
    }
}
async function getAllData(urls) {

    return await urls.map(e => (Promise.all(e.map(u => (axiosData(u))))))

    //   await Promise.all(variable).then(elem=>{
    //     return (elem);
    //    });

}

const obtenerEpisodes = async (req, res) => {

    let url = [];
    let resultado = [{
        "exercise_name": "Episode locations",
        "time": "10s",
        "in_time": false,

    }];

    let datitos = [];
    let location = [];

    let resultEpi = [];
    let result = []
    let i = 0;
    let capitulos = []

    let consulta = []
    let consultas = []
    try {

        let episode = await axios.get('https://rickandmortyapi.com/api/episode')
        episode.data.results.forEach(u => (
            capitulos.push({
                name: u.name,
                episode: u.episode,
                characters: u.characters
            })
        ))


        for (let i = 2; i <= episode.data.info.pages; i++) {
            url.push(`https://rickandmortyapi.com/api/episode?page=${i}`)
        }


        Promise.all(url.map(async f => {
            await axios.get(f)
                .then(resposnse => {
                    datitos.push(resposnse)
                })
        }))


        datitos.forEach(r => {
            r.forEach(k => {
                k.data.results.forEach(u => {
                    capitulos.push({
                        name: u.name,
                        episode: u.episode,
                        characters: u.characters
                    })

                })
            })
        })

        console.time()

        consulta = capitulos.map(el => (
            el.characters.map(f => (f))))

       consulta.map(async e => await Promise.all(e.map(u => (axiosData(u)))
        ).then(valores => 
             (consultas.push(valores))
        ))
        console.log(consultas);
        res.json(consultas);
        // let resultado = await Promise.all(consulta)


        //  let resultado3 = await Promise.all(resultado2.map(el=>(el)))
        //  console.log(resultado); 
        // for (let capitulo of capitulos) {

        //     resultEpi.push(await Promise.all(capitulo.characters.map(enlaces => (
        //         axiosData(enlaces)
        //     ))))

        //     //  await  Promise.all(capitulo.characters.map(async r => {
        //     //        await axios.get(r)
        //     //                 .then(resultado=>{
        //     //                     resultEpi.push(resultado)
        //     //                 })
        //     //     }))
        // }
        // res.send(resultEpi);


        console.timeEnd()
        // location.push(resultEpi.map(r => (
        //     probar.push((r.data.location.name))
        // )))

        // // // console.log(location);
        // res.send(location)  
        // location.forEach(data => {
        //     result.push(data.filter((item, index) => {
        //         return data.indexOf(item) === index;
        //     }))
        // }
        // )

        // result.forEach(loca => {
        //     capitulos.forEach(o => {
        //         delete o.characters
        //         o['location'] = loca
        //     })
        // })

        // resultado.forEach(datos => {
        //     datos.results = capitulos
        // })

        // res.json(resultado)
    } catch (error) {
        console.log(error.message);
    }
}


export { obtenerEpisodes }