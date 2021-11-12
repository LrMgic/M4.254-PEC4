Explica que realiza cada una de las siguientes opciones de Angular CLI. 
    • ng new -> Crea un nuevo proyecto Angular CLI. posterior al código se tiene que indicar el nombre del proyecto.
    • ng generate -> Genera y/o modifica archivos según la extensión indicada, vinculándolo automáticamente al proyecto:
        o component -> Crea un nuevo componente genérico compuesto por un archivo component.ts, component.space.ts, component.( de estilo scss, css, etc.), component.html
        o directive -> Crea un fichero directive.ts y directive.spec.ts que sirve para cambiar la apariencia o el comportamiento de los elementos DOM.
        o enum -> Crea un fichero .ts de enumeración para crear un conjunto de constantes con número.
        o guard -> Crea un fichero guard.ts y guatd.spec.ts los cuales  devuelven un valor booleano de true o false para permitir el paso o no de un usuario a la ruta. También pueden devolver un Observable o una Promese si el guard no puede responder inmediatamente y tiene que esperar.
        o interface -> Crea un documento .ts en el qual se especifica una interface para exportar.
        o pipe ->  Crea un fichero pipe.ts y pipe.spec.ts el qual crea un decorador que marca una clase como pipe y proporciona metadatos de configuración.
        o service -> Crea un fichero service.ts y service.spec.ts el qual provee datos que mantienen la operativa y la lógica de acceso a ellos 
    • ng serve -> Genera un servidor (en la ruta pregerminada [localhost](http://localhost:4200/)) el qual muestra los resultados del pryecto Angular CLI.
    • ng test -> Genera una comprobación de errores.
    • ng version -> Devuelve la versión de Angular CLI instalada y sus dependencias.
