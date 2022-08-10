import axios from 'axios';


const getAllEpisodes = async (req, res) => {
    try {
        let sondulas = [];
        let apiUrl = 'https://rickandmortyapi.com/api/episode';
        let num = 1
        let info = []
        let nombres = [];

        for (let i = 0; i < num; i++) {
            let { data } = await axios.get(apiUrl)
            num = data.info.pages
            data.results.map(elemento => {
                sondulas.push({
                    name: elemento.name,
                    episode: elemento.episode,

                })
                Promise.all(elemento.characters.map(enlaces => (axios.get(enlaces))))
                    .then(valores => {

                        nombres.push(valores.map(loca => (loca.data.location.name)))
                    })

                nombres.forEach(data => {
                    info.push(data.filter((item, index) => {
                        return data.indexOf(item) === index;
                    }))
                })
                info.forEach(loca => {
                    sondulas.forEach(o => {
                        o.locations = loca
                    })
                })
            })
            apiUrl = data.info.next;
        }

        res.json(sondulas)

    } catch (error) {
        console.log(error);
    }
}
export { getAllEpisodes }