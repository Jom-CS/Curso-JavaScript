/*
En este vídeo va a explicar porque no se debe utilizar var para declarar variables. Cpsa que no hará en el resto
de vídeos.
El principal problema es que nos permite reemplazar propiedades del objeto global Window. Esto es un problema
porque el objeto global Window es el objeto más importante de JavaScript. Es el objeto que contiene todas las
variables y funciones globales. Si se reemplazan propiedades de este objeto, se pueden reemplazar funciones
importantes de JavaScript y se puede romper el código.
*/
//Muestra un ejemplo de como se puede reemplazar una propiedad del objeto global Window.

/* Mediante la vista responsive de chrome se puede ver como se ve la página en diferentes dispositivos, vas 
moviendo la barra lateraly se va adaptando la página a los diferentes tamaños de pantalla.
Se ,muestran las dimensiones de la pantalla en la parte superior izquierda, anchura y altura.
Si en la consola escribo window.outerWidth, me muestra (como siempre sin hacer falta un código con console.log)
 la anchura de la pantalla en la que se está viendo ahora mismo y corresponde con los valores que vemos a a la 
 izquierda. Lo mismo pasa con windows.outerHeight, muestra los valores de la altura de la pantalla.
 Vas cambiando el tamaño de la pantalla con la barra lateral y se van actualizando los valores de la consola.

 PERO, si se nos ocurre la brillante idea de crearme una variable que se llame igual que esta variable del objeto
 window, outerWidth, y le asigno un valor, por ejemplo 1000, y vuelvo a ejecutar el código, se ve que la variable 
 outerWidth del objeto window se ha reemplazado por mi variable outerWidth con el valor que le he asignado.
 
 */
// var outerWidth = 1000000;

/*Si se vuelve a ejecutar el código, se ve que la variable outerWidth del objeto window se ha reemplazado por mi
variable outerWidth con el valor que le hemos asignado.
Y sabemos que el ancho del navegador web no es 1000000 
(recordar que el lenguaje es case sensitive y si pones outerwidth, en vez de outerWidth ya no la sobreescribe.
Entiende que es otra variable).
Si se hace lo mismo con outerHeight con un valor de 600, se ve que se sobreescribe también. Que es un valor mas
creible y hace que sea difícil de detectar y rastrear la manipulación.

//var outerHeight = 600;

Esta problematica llevo a JavaScript a crear la palabra reservada let, que no permite reemplazar propiedades del
objeto global Window.

Si se cambia var por let y const, se ve que no se sobreescribe la propiedad del objeto global Window.
let outerWidth = 1000000;
const outerHeight = 600; 

Si no se vieran los valores reales, habría que recargar la página con la opción Hard Reload.
Ahora con escribir en console window.outerHeight se ve el valor real.
Al escribir simplimente outerHeight, se ve el valor de la variable que hemos creado. Está dentro del scope
correspondiente (ámbito de la función, ámbito de bloque, etc.).

*/

//Segundo problema de var: Hoisting.

/*
Explicación de copilot:
Hoisting es un comportamiento de JavaScript que mueve las declaraciones al inicio del scope.

Si se declara una variable con var, se puede utilizar antes de que se inicialice.
El "hoisting" es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven, 
o "izan", al inicio de su ámbito actual durante la fase de compilación.

El problema con var es que, a diferencia de let y const, se izan sin importar dónde se declaren en su ámbito. 
Esto puede llevar a resultados inesperados porque las variables declaradas con var pueden ser accesibles antes 
de que se les asigne un valor.

Aquí tienes un ejemplo de cómo el hoisting puede causar problemas con var:

console.log(miVariable); // undefined

var miVariable = 5;

console.log(miVariable); // 5

En este ejemplo, aunque miVariable se declara después de la primera llamada a console.log, el código no produce
 un error porque miVariable se izó al inicio del ámbito. Sin embargo, como miVariable aún no se le ha asignado 
 un valor en el momento de la primera llamada a console.log, se imprime undefined.

*/

/*
Explicación de profesor:

Pongamos que se pone como primera instrucción del código un console.log:

console.log(miNuevoNombre);

Al cargar el html nos dirá que miNuevoNombre no está definido. [Recordamos que el undefined tiene este motivo:
Esto es porque el intérprete de JavaScript lee todo el código y lo guarda en un índice, donde se guarda y definen
la información de las variables y funciones que hay en el código. Luego empieza a ejecutar el código línea por línea.
Por eso en el depurador, en el scope, en la parte de variables, salen las variables que se han declarado pero
salen con el valor undefined, porque aún no se ha ejecutado la linea de código donde se inicializan.]

¿Qué pasaría si se declara la variable con var después del console.log, al final del código p.ej.?

console.log(miNuevoNombre);
var miNuevoNombre = 'Fernando Herrera';

Si recargo el archivo html video15principalProblemaConLaInicializacionConVar.html, se ve que no da error
y muestra undefined.
En javaScript cualquier variable que no se inicializa tiene el valor undefined, eso es lo que imprime el console.log
y no da error. 
JavaScript detecto que sí esta inicializada en el código pero que en el momento de usarla aún no se ha hecho.
Si se le concatenase en console.log un string, se vería que se concatena con el undefined.

console.log(miNuevoNombre + 'Jimenez');

¿Qué pasaría si se declara con let en vez de var?

let miNuevoNombre = 'Fernando Herrera';

Nos da otro error en la consola de chrome:
Uncaught ReferenceError: Cannot access 'miNuevoNombre' before initialization
    at video15principalProblemaConLaInicializacionConVar.html:15

No se puede acceder a miNuevoNombre antes de inicializarla.

Si detectará que no hay declaración de la variable, daría otro error:
Uncaught ReferenceError: miNuevoNombre is not defined
    at video15principalProblemaConLaInicializacionConVar.html:15

*/

console.log(miNuevoNombre + 'Jimenez');
var miNuevoNombre = 'Fernando Herrera';