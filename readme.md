# Crossfit API

Este proyecto es una API para gestionar un sistema de Crossfit. Utiliza Node.js y Express.

## Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Configuración

1. Clona este repositorio:

   ```sh
   git clone https://github.com/tu-usuario/crossfit-api.git
   cd crossfit-api

## Uso
### Levantar el Proyecto

Para construir y levantar los servicios definidos en el archivo docker-compose.yml, ejecuta:


```sh
    docker-compose up --build
```

Esto construirá la imagen de Docker y levantará el contenedor en modo desarrollo utilizando el script dev definido en el package.json.
Acceder a la Aplicación

Una vez que los contenedores estén corriendo, podrás acceder a la API en 
[http://localhost:3000/api/v1/workouts](http://localhost:3000/api/v1/workouts)

### Detener el Proyecto

Para detener los contenedores, ejecuta:

```sh
    docker-compose down
```


### Estructura del Proyecto
```sh
/crossfit-api
|-- Dockerfile
|-- docker-compose.yml
|-- package.json
|-- src
    |-- index.js
    |-- ...
```

* Dockerfile: Define la imagen de Docker para el proyecto.
* docker-compose.yml: Define los servicios de Docker Compose.
* package.json: Contiene las dependencias y scripts del proyecto.
* src/index.js: Archivo principal de la aplicación.

### Scripts de npm
```sh
    npm run dev: Ejecuta la aplicación en modo desarrollo utilizando node --watch.
    npm test: Comando de ejemplo para pruebas (no implementado).
```

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)

## Autor
Fernando Mercado