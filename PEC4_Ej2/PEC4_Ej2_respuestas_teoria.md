1. ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado vinoteca? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto)
    - Se deve ejecutar "ng new" más el nombre del nuevo proyecto. 
    - En el caso que no escrivieras en nombre del proyecto, Angular CLI te pediria que indicaras el nombre a trabés de la pregunta "What name would you like to use for the new workspace and initial project?"
    - La siguiente pregunta que hace Angular CLI és si quieres que genere el automaticamente los enrutados, a través de la pregunta "Would you like to add Angular routing?".
    - Posteriormente se tiene que escojer una de las opciones de formato para el estilo (CSS, SCSS, SASS o Less)
    - Una vez respondidas estas pregunta, Angular CLI generará una nueva carpeta con el nombre del proyecto y todas las deendencias necesarias. 
Explica brevemente la estructura y ficheros que ha generado Angular CLI:
    • Ficheros de configuración en la raíz del proyecto:
        o .browserslistrc -> En este fichero se configuran las versiones de los navegadores con los que será compatible nuesro proyecto.
        o .editorconfig -> Este fichero define el estilo y reglas que seguirá nuestro codigo para que todos los desarrolladores que participen en este proyecto mantengan el mismo estilo.
        o .gitignore -> Este fichero es parte de la configuración de GitHub, el cual te permite configurar que archivos formarán parte del repositorio GitHub.
        o angular.json -> Este fichero contiene la configuración Angular del nuevo proyecto, indicando aquí todos los módulos y archivos que utiliza Angular para funcionar.
        o karma.conf.js -> Karma es un programa de testeo. A través de este fichero, podemos configurar todas las opciones de testeo que ejecutará Angular CLI.
        o package-lock.json / package.json -> Este fichero es la configuración de los modulos intalados y gestionados por node. Estos ficheros nos permiten crear la carpeta node_modules.
        o README.md -> En este fichero se escribe la información importante para entender el proyecto y su configuración.
        o tsconfing.space.json / tsconfing.json / tsconfing.space.json -> Estos fichero especifican como se comportará el Typescript y su relación con Angular.
    • Directorio node_modules -> En esta carpeta se almacenan todos los módulos instalados por el gestor node.
    • Directorio e2e -> En la carpeta e2e se crea una copia de nuestro proyecto en el cual se aplican los tests especificados para detectar posibles problemas en nuestro código.
    • Directorio src: -> En esta carpeta se encuenta todos los archivos relacionados con la estructura, interactividad y diseño de nuestro proyecto.
        o index.html -> Es el fichero principal que buscan los navegadores. En el se especifica toda la información estructural que tendrá la página web. En el caso de Angular, el <body> de este fichero se mantiene vacio, vinulado a través de <app-root> a la carpeta "app".
        o main.ts -> Este fichero es es el contructor principal de Angular CLI.
        o styles.css -> Este fichero proorciona el estilo del fichero index.html, considerando este estilo el de la capa principal del proyecto.
        o test.ts -> Este fichero contiene la estructura de los tests que Angular aplica a nuestro proyecto.
        o polyfills.ts -> Este fichero se encarga de la conversión de codigo para adaptarlo a los distintos navegadores y versiones. En el caso que se quisiera crear una conversión especifica, se indicaría el código en este archivo.
        o Directorio environments -> A través de los archivos incluidos en esta carpeta se pueden crear distintos tipos de copilación. Se recomienda que solo se use en etapas de desarrollo, comentando el codigo dentro de este archivo en la verión definitiva para evitar problemas.
        o Directorio assets -> En la carpeta Assets se introducirán todos los demás ficheros que se utilizen en el proyecto que no sean parte del codigo, como por ejemplo archivos de datos o imagenes.
        o Directorio app -> En esta carpeta está el código de la App que se mostrará en la página web, el <body> del archivo index.html
             Ficheros app.component.* -> En estos ficheros se especifica los componentes que caracterizan los protyectos Angular, los cuales se mostrarán en el <body>.
             Fichero app.module.ts -> A traves del fichero app.module.ts, angular conecta los distintos componentes para integrar todas sus funcionalidades.

2. Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:
    • app.module.ts - @NgModule -> Relacionar los inyectores con los compiladores
        declarations -> En el "declarations" se identifican todos los componentes que se usaran en el proyecto, junto a las "directives" i "pipes".
        imports -> Se identifican todas las declaraciones 
        providers -> Se identifican los objetos inyectables que están disponibles en el inyector.
        bootstrap -> Se identifican el conjunto de componentes que se inicia cuando se inicia este módulo.
    • app.component.ts - @Component -> Marca una clase como un componente angular y proporciona metadatos de configuración que determinan cómo se debe procesar, instanciar y usar el componente en tiempo de ejecución.
        selector -> Es el inicializador. Identifica esta directiva en una plantilla y desencadena la instanciación de la directiva.
        templateUrl -> Relaciona el decorador a través de una ruta relativa o URL absolut con una plantilla "fichero .html"
        styleUrls -> Relaciona el decorador a través de una ruta relativa o URL absolut con una hoja de estilos "fichero .css, ..scss, .sass o .less, segun se haya indicado al crear el proyecto."

3. ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls?
    Si, a trabés de sus omonimos template y styles

¿Es recomendable hacer esto?
    Si se puede hacer, pero en el caso de las plantillas, no se pueden indicar las dos opciones  (una ruta relativa "templateUrl" junto a una en lñinea "template")