1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la
directiva estructural NgFor:
    • index -> La variable local "index" representa la posición del objeto que se está ejecutando. A través de "index" podemos imprimir la posición actual, teniendo en cuenta que empieza por la cero.
    • even / odd -> La variable "even" representa las posiciones impares de una estructura NgFor, mientras que "odd" representa las pares, devolviendo un valor booleano positivo cuando se cumple. Se utilizan para poder separar impares y pares, tratándolas de forma separada, poco por ejemplo dar un color a las filas pares y otro a las impares.
    • first / last -> "first" y "last" devuelven un valor boleando que indica si es cierto que el parámetro es el primero/último. Se pueden utilizar para dar un parámetro diferente en el inicio y final, como por ejemplo añadir un evento que destaque el inicio o un evento de clausura. 
2. ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos
de uso.
    Es una función que define cómo realizar un seguimiento de los cambios para los elementos en el iterable, recibiendo dos entradas con el índice de iteración y el ID del objeto del nodo (ítem). Por ejemplo, puede indicar cuando se agregan, eliminan o se mueven elementos dentro del array. Esto puede ser útil para destacar los nuevos cambios o hacer seguimientos de estos.

3. ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón
tanto si es si posible como si no lo es.
    No pueden ejecutarse varias directivas estructurales simultáneamente ya que modifican el DOM. Su actuación no es de apariencia como podría ser ocultar un elemento, sino que su actuación es de forma estructural la qual elimina, agrega o modifica. Al hacer este tipo de acciones, se podrían generar errores si se ejecutaran varias acciones a la vez.
