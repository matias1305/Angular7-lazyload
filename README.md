# Base Angular 7 - `Lazy Load`

 Base para comenzar cualquier proyeto de Angular en su versión 7 en este proyecto se estan utilizando librerías tales como
* `Bootstrap v4.2.1 (Jquery v3.3.1, Popper v1.14.7)`
* `Animate css v3.7.0`
* `Fontawesome v5.7.1`

Ademas podemos encontrar implementada una estructura basada en el patrón de diseño `MVC`.

Demostración resumida:
```

|-- /app
  |-- /controllers
    |-- /guards
    |-- /services
    |-- controller.module.ts
  |-- /models
  |-- /views
    |-- /app
    |-- /login
    |-- /errors
    |-- /components
    |-- /pages
      |-- pages.module.ts
    |-- /shared
      |-- shared.module.ts
  |-- assets
    |-- /css
    |-- /js
    |-- /images
    |-- /fonts
  |-- theme
    |-- _variables.scss
    |-- _loading-welcome.scss
    
```

### Instalaciones necesarias
Necesitara instalar las siguientes librerias
```
$ sudo npm install -g @angular/cli
$ sudo npm install -g typescript
```

### Instalar dependencias
```
$ npm install
```

### Servidor de pruebas web
Para levantar el servidor de pruebas web ejecute el siguiente comando:
```
$ ng serve -o
```

-- Generar build de la aplicación
```
$ ng build
```

### Generar versión de producción
Para generar la versión de producción ejecute los siguientes comandos:
```
$ ng build --prod
```