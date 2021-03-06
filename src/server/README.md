# Implementación API para las aplicaciones a través del consumo de la base de datos

## Instrucciones

Esta parte de la aplicación es la encargada de llevar acabo la implementación de los dinstintos *endpoints* de la API RESTful, para su realización se han utilizado las siguientes librerías:

* Mongodb
* Mongoose
* Express.js
* Morgan
  
Para instalar este proyecto sólo es necesario clonar todo el repositorio, entrar a la ruta src/server y ejecutar:

```bash
npm install
```

Seguido de:

```bash
npm start
```

Este último comando se puede ejecutar en la configuración establecida en el archivo `package.json`. 

###

## Funcionamiento

Como se ha mencionado: este server se encarga de proveer el principal servicio web a nuestra aplicación, tanto al *frontend* de la página web como a la aplicación móvil, todos los datos de la base de datos utilizados son los que recolectó la aplicación dedicada a ello ([consultar la sección correspondiente](../serialcomm/README.md)) para más información.

Los distintos *endpoints* de la aplicación, parámetros y demás no se listan en este repositorio, para ello se implementó una pequeña aplicación de frontend (y desplegada por la misma aplicación) como referencia y/o documentación.

La documentación y la utilización de dicha aplicación puede ser consultada en el siguiente enlace:

[Documentación API](https://tc-utch-api.herokuapp.com/)