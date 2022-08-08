import axios from 'axios';

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


        await Promise.all(url.map(f => (axios.get(f))))
            .then(valores => {
                datitos.push(valores)
            })
            .catch((error) => {
                console.log('error url' + error.message);
            })


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


        while (i < capitulos.length) {
            await Promise.all(capitulos[i].characters.map(async r => (await axios.get(r))))
                .then(values => {
                    resultEpi.push(values)
                })
                .catch((error) => {
                    console.log(error);
                })
            i++;
        }

        resultEpi.forEach(datos => (
            location.push(datos.map(r => (r.data.location.name)))
        ))

        location.forEach(data => {
            result.push(data.filter((item, index) => {
                return data.indexOf(item) === index;
            }))
        }
        )

        result.forEach(loca => {
            capitulos.forEach(o => {
                delete o.characters
                o['location'] = loca
            })
        })

        resultado.forEach(datos => {
            datos.results = capitulos
        })

        res.json(resultado)
    } catch (error) {
        console.log(error.message);
    }
}


export { obtenerEpisodes }