## Rick and Morty API

Este es un Back-End hecho en Node.js.

## Getting Started

Primero, instalar el package.json:

```
bash
npm install
```

Luego, lanzar el servidor

```bash
npm run dev
# or
yarn dev
```

Usar Postman para hacer el llamado a las rutas o en el navegador:

1. Para ver los resultados:
```
localhost:3001/getdata
```
Al hacer esta peticion vas a obtener una respuesta como esta:
```
[
    {
        "exercise_name": "Char counter",
        "time": "2.7s to 3.7s",
        "in_time": true,
        "results": [
            {
                "char": "l",
                "count": 63,
                "resource": "location"
            },
            {
                "char": "e",
                "count": 39,
                "resource": "episode"
            },
            {
                "char": "c",
                "count": 387,
                "resource": "character"
            }
        ]
    },
    {
        "exercise_name": "Episode locations",
        "time": "3s",
        "in_time": true,
        "results": [
            {
                "name": "Pilot",
                "episode": "S01E01",
                "locations": [
                    "Citadel of Ricks",
                    "Bepis 9",
                    "Earth (C-137)",
                    "unknown",
                    "Interdimensional Customs",
                    "Earth (Replacement Dimension)",
                    "Worldender's lair"
                ]
            },...more data
            ]
    }
]
  
```
El tiempo de respuesta depende de la velocidad de internet, en priomedio ```3s```
