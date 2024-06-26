# Proyecto de Gestión de Canchas Deportivas

Este proyecto es una API desarrollada con NestJS usando GRAPHQL y apollo para gestionar canchas, deportistas y la separación de canchas.

## Descripción

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en las entidades Cancha, Deportista y SeparacionCancha. También se incluye una carpeta `Pruebas` con imágenes de prueba.

## Tecnologías Utilizadas

- **NestJS**: Framework para construir aplicaciones Node.js escalables.
- **TypeORM**: ORM para manejar la interacción con la base de datos.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
- **Graphql**
- **Apollo**

## Instalación

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_REPOSITORIO>
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura la base de datos en `app.module.ts` con tus credenciales de PostgreSQL.

## Ejecución

1. Ejecuta la aplicación:
    ```bash
    npm run start
    ```

2. La aplicación estará disponible en `http://localhost:3000`.

## Ruta para graphql

- **-** `http://localhost:3000/graphql`


## Imágenes de Prueba

Las imágenes de prueba se encuentran en la carpeta `Pruebas` en la raíz del proyecto.

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir lo que te gustaría cambiar.
