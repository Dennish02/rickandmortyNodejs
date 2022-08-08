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

Usar Postman para hacer el llamado a las rutas o en el navegar:

1. Para ver los caracteres:
```
localhost:3001/charcounter
```
Al hacer esta peticion vas a obtener una respuesta como esta:
```
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
}
```

2. Para ver los episodios con los nombres de los lugares
```
localhost:3001/episode
```
Al hacer esta peticion vas a obtener una respuesta como esta:
```
[
    {
        "exercise_name": "Episode locations",
        "time": "10s",
        "in_time": false,
        "results": [
            {
                "name": "Pilot",
                "episode": "S01E01",
                "location": [
                    "Citadel of Ricks",
                    "Earth (Replacement Dimension)",
                    "Planet Squanch",
                    "Rick and Two Crows Planet",
                    "Rick's Memories",
                    "unknown",
                    "Earth (C-137)",
                    "Earth (Unknown dimension)"
                ]
            }, ....more
            ]
     }
]
    
```

