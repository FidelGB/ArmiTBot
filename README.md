# ArmiTBot (Bot de discord)

Bot de discord diseñado en Node JS

### Instrucciones para ejecutar el bot

1. Realizar un Fork al proyecto (Opcional)
2. Clonar el proyecto
3. Descargar las dependencias:
```shell
$ npm install --save
```
4. Crear una variable de entorno en el sistema llamada TOKEN para almacenar el token de discord, o en su defecto crear un archivo ``.env`` para alamcenarlo de esta manera:
````
TOKEN=<secret token here>
````
5. Levantar el server
    - Modo desarrollo:
    ```shell
    $ npm run dev
    ```
    - Modo producción:
    ```shell
    $ npm start
    ```