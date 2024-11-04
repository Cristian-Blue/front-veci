# Veci - Prueba técnica Punto Red

Esta aplicación hace parte de la prueba técnica de punto red realizada con la libreria React, axios, integrando material ui y toastifing, la cual consta de 3 sección, unicio de seción, recarga de dispositivos y consulta de trasacciones, donde las dos últimas partes mensionadas requieren de autenticación mediante cabezeras Authentication Bearer para su acceso.

# Tabla de contenido

- [Introducción](#Veci---Prueba-técnica-Punto-Red)
- [Características](#Caracteristicas)
- [Estructura del proyecto](#Estructura-del-proyecto)
- [Instalación](#Instalación)
- [Ejecución](#Ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto) 

# Caracteristicas

- Sistema de inicio de sesión
- Recargas a números colombianos
- Consulta de recargas históricas
- Validación de campos
- Notificación de procesos

# Estructura del proyecto

```bash
RecargasApp/
├── public/
├── src/
│   ├── assets/          # Imagenes utilizadas para la creación del proyecto
│   ├── components/      # Elementos de uso frecuente en la aplicación
│   ├── pages/           # Secciones de la aplicación que contiene la estructura de cada vista
│   ├── provider/        # Configuración de uso general
│   ├── routes/          # Configuración de rutas
│   ├── services/        # Servicios de externos para consumo de la aplicación
├── .gitignore           # Archivos ignorados por Git
├── package.json         # Metadatos del proyecto y dependencias
├── README.md            # Documentación del proyecto
└── ...
```

# Instalación

## Requerimientos

- Node js (^20.* )
- NPM (^10.*)

### Descarga del repositorio

```
    git clone https://github.com/Cristian-Blue/front-veci.git
    cd front-veci
```

### instalación 

Configuración de variables de entorno
```
###> END POINT <###
REACT_APP_API_URL=
###> END POINT <###
```

Comando de instalación
```
    npm install 
```

# Ejecución

## Desarrollo

```
    npm start
```

## Build

```
    npm build
```


