const endPoint = (num, tipo)=>{
    return `https://rickandmortyapi.com/api/${tipo}?page=${num}`
}
const endPointCharacter = 'https://rickandmortyapi.com/api/character';
const endPointEpisode = 'https://rickandmortyapi.com/api/episode';
const endPointLocation = 'https://rickandmortyapi.com/api/location';


export {
    endPoint,
    endPointCharacter,
    endPointEpisode,
    endPointLocation
}