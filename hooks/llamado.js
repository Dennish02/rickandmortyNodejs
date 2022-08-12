import axios from 'axios';

export default async function llamado(url1, endPoint, letra, tipo) {

  let url = [];
  let nombres = [];
  let veces = 0;

  let { data } = await axios.get(`${url1}`)
  data.results.map(e => (
    nombres=[...nombres, e.name]
  ))
  for (let i = 2; i <= data.info.pages; i++) {
    url=[...url, endPoint(i, tipo)]
  }
  let details = await Promise.all(url.map(async e => await axios.get(e)));
  details.map(e => (
    e.data.results.map(f => (
      nombres=[...nombres, f.name]
    ))
  ))
  nombres.forEach(e => {
    if (e.includes(letra) || e.includes(letra.toUpperCase())) {
      veces = veces + 1;
    }
  })
  return {
    "char": letra,
    "count": veces,
    "resource": tipo
  };
}