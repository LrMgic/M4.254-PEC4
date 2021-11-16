1. ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo
de uso de cada uno de ellos.

    Como modo predeterminado, Angular no relaciona los estilos especificados en un componente con los demás componentes si no se especifica expresamente. Utilizando el código "encapsulation: ViewEncapsulation.<Elemento>", Angular tiene tres opciones principales para modificar este comportamiento:
    - 0 -> Emulated: Es una variación de “Native” y es la opción por defecto de Angular. Agrega una ID sustituta a los elementos de host y proporciona las reglas de estilo proporcionadas a través de Styles/StyleUrls, agregando el nuevo atributo de elemento host a todos los selectores. Se puede utilizar en componentes que son distintos al resto y no utilizan los estilos generales, como podría ser un menú de barra lateral.
    - 1 -> Native: El método Native és el que utiliza todo el potencial de Angular, el qual utiliza Shadow root, pero solo funciona en navegadores y plataformas que lo admita de forma nativa. La diferencia con el “Emulated” és que en lugar de agregar una id en los elementos, angular utiliza rutas para acceder a los distintos componentes. Se puede utilizar en el caso descrito anteriormente solo si el desarrollo se está haciendo para navegadores que lo soporten.
    - 2 -> None: Angular no proporciona ningún encapsulado o plantilla, utilizando los mismos estilos en todas las capas y componentes. Se puede utilizar en los estilos generales, que podrían ser los márgenes, variables de colores, tamaño y estilo de letra, etc.
    - 3 -> ShadowDom:  Este método encapsula los estilos, a través de un Shadow DOM moderno y creando un Shadow Root para el elemento anfitrión del componente. Se utiliza para estilos que pueden ser reutilizados pero que en general solo afectan al componente especificado. Un ejemplo puede ser los estilos aplicados a una tabla, los cuales no afectan a los demás componentes.


2. ¿Qué es el shadow DOM?

   La API Shadow DOM es la parte del encapsulado web que se encarga de mantener oculto a un elemento, manteniendo la estructura de marcado, el estilo y el comportamiento ocultos y separados de otros códigos en la página para que las diferentes partes no entren en conflicto y el código se pueda mantener limpio y ordenado.


3. ¿Qué es el changeDetection?

   En changeDetection de Angular es el encargado de realiza la detección de cambios en cada componente desde el pie a la cabeza, cada vez que se realiza algo. Un problema de este método es que al hacerse la aplicación compleja, este proceso se vuelve muy pesado.


4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo
debes usar una y otra? Ventajas e inconvenientes.

    A través del ChangeDetectionStrategy, Angular nos permite decidir cómo y cuando actualizar la interfaz de usuario. A través del parámetro “Default”, Amazon actualiza la interfaz cada vez que se detecta algún cambio, opción por defecto. Por contra, a través de “OnPush”, Angular solo lo hará si se indica expresamente.
    Este cambio (De Default a OPush) se debe aplicar en el momento que la aplicación crezca tanto que no sea sostenible la actualización completa de la interfaz de usuario y sea más acertado solo actualizar partes en concreto.
    La principal ventaja de actualizar toda la aplicación por defecto es que todos los parámetros se actualizan cuando hay un cambio, pero si el volumen de la aplicación es considerable, el tiempo de renderizado puede ser notable. Por contra, actualizar solo los puntos indicados puede disminuir mucho el tiempo de renderizado, pero podemos tener partes que no se actualizan de una forma adecuada.



5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados.

    El ciclo de vida de los componentes se divide en 8 etapas diferentes, denominas “lifecycle hook evento” o evento de enlace de ciclo de vida. 
    Estas etapas están divididas principalmente en dos fases, una vinculada al componente en si y la otra vinculada a los hijos del componente.
    Partiendo de la base que los componentes de Angular son clases de TypeScript y cada componente tiene un método costructor, antes de ejecutar cualquier etapa del ciclo de vida, se ejecuta el constructor de la clase del componente que inyectan las dependencias. Después de ejecutar el constructor, Angular ejecuta sus métodos de enganche de ciclo de vida en un orden específico, representado en la imagen:
    ![image](imatge1.png)
    - ngOnChanges: Se ejecuta cada vez que se cambia un valor de un input control dentro de un componente. Se activa primero cuando se cambia el valor de una propiedad vinculada. Solo recibe un "change data map" que contiene el valor actual y anterior de la propiedad vinculada envuelta en un "SimpleChange". Este es el inicio de la primera fase.
    - ngOnInit: Se ejecuta una vez que Angular ha desplegado los "data-bound properties" o cuando el componente ha sido inicializado, una vez que ngOnChanges se haya ejecutado. Este evento es utilizado principalmente para inicializar la data en el componente.
    - ngDoCheck: Se activa cada vez que se verifican las propiedades de entrada de un componente. Este método nos permite implementar la lógica o algoritmos de detección de cambios personalizados para cualquier componente.
    - ngAfterContentInit: Se ejecuta cuando Angular realiza cualquier muestra de contenido dentro de las vistas de componentes, justo después de ngDoCheck y una vez que todas las vinculaciones del componente se han verificarse por primera vez. Está vinculado con las inicializaciones del componente hijo, comportando la clausura de la primera fase y siendo el primer elemento de la segunda fase.
    - ngAfterContentChecked: Se ejecuta cada vez que el contenido del componente ha sido verificado por el mecanismo de detección de cambios de Angular; se llama después del método ngAfterContentInit. Este también se invoca en cada ejecución posterior de ngDoCheck y está relacionado principalmente con las inicializaciones del componente hijo.
    - ngAfterViewInit: Se ejecuta cuando la vista del componente se ha inicializado por completo. Este método se inicializa después de que Angular ha inicializado la vista del componente y las vistas secundarias. Se llama después de ngAfterContentChecked. Solo se aplica a los componentes.
   - ngAfterViewChecked: Se ejecuta después del método ngAfterViewInit y cada vez que la vista del componente verifique cambios. También se ejecuta cuando se ha modificado cualquier enlace de las directivas secundarias. Por lo tanto, es muy útil cuando el componente espera algún valor que proviene de sus componentes secundarios.



