// console.log('Hola mundito');
/*Console.WriteLine('Hola mundito'); de javascript resulta que 1ero: Es un lenguaje interpretado como python. 
Se puede escribir y ejecutar todo en consola*/

/*Aunque no se muy bien como va, otra forma: escribes tu código en el editor y luego se escribe en consola:
node seguido del nombre del archivo: app.js y se ejecuta*/

/* Todas los métodos y funciones son de tipo return y no de tipo void como en otros lenguajes, siempre devuelven algo como
"undefined". En c# se usa void para funciones que no devuelven nada y solo te sale en consola el mensaje de ese 
console.writeline
Esto se ve cuando hace el hola mundo en la consola de chrome y le devuelve, debajo del mensaje, el valor undefined
¿Por qué muestra el valor del return?
Porque el navegador web tiene un motor de javascript. En esta consola de chrome se puede probar código javascript.
Es como una forma manual de probar y modificar sus variables, funciones y métodos. Por eso muestra el valor del return, 
no porque lo imprima, si no a título informativo.
En esta consola de chrome o mediante el comando de la llamada del entorno Node con la terminal o con la consola de Visual 
Studio Code, se entiende que es una comunicación máquina, usuario. En cambio, en el editor de texto, se entiende que es
una  comunicación máquina, máquina. Tengo mi código de JavaScript y si la intención es que se muestre
el return en consola o el resultado de a + b, tengo que guardar ese valor del return en una variable o parámetro y mediante 
un console.log imprimirlo en consola. O bien, hacer un console.log del método mismo.
console.log(nombreDeLaFuncion());    
 Por eso, al ejecturar el archivo del editor de texto, no muestra el valor del return, porque no es una comunicación 
 máquina, usuario, sino máquina, máquina. 

 Ejemplo:

 function getLength(text) {
    return text.length;
}

console.log(getLength('Hola'));

En el archivo.js escribiariamos este código y al ejecutarlo nos imprimiría en consola el valor del return del método.
Aquí se hace un método que devuelve el valor del return del método length de javascript, que devuelve la longitud de un string.
En la siguiente línea de código se ejecuta otro método, en este caso el writeline- log de Console.
Este método de impresión se le pasa por parámetros la llamada al método getLenght que también recibe un valor por 
parámetros, en este caso un string que necesita para cumplir su función que es medir el largo de ese string.
Se llama al método getLength y se le pasa como parámetro el string 'Hola' y se guarda en el parámetro text. El valor del
método es el de su return.
En cambio, en la consola de chrome, sin que en el código que escribamos haya a continuación del método un console.log, nos 
enseñara el valor del return del método, porque es una comunicación máquina, usuario. Pero si no estuviera en el código
del editor de texto, no veriamos que resulta de la ejecución del método, pues no se imprime ese return en consola.
*/
/*Estando en la consola de chrome, utilizando la palabra reservada document, se puede acceder a todo el html de la página. 
Hace document.write('Hola mundo'), escribe en el html de la página, en vez de en consola (pero no es recomendable hacerlo 
así, porque se puede sobreescribir todo el html de la página. Por eso se recomienda hacerlo con un script en el html 
o en un archivo .js aparte y luego llamarlo en el html con un script.)*/

/* En el primer video explicó que se podía realizar un Hola mundo en: la consola de chrome que tiene una integración de
javascript, en un terminal de sistema, en la consola de Visual Studio o primero en el editor de texto y luego, mediante node
(entiendo que no es lo mismo, pero remotamente similar a usar el comando csc que llama al compilador de c#), 
se ejecuta el archivo .js en consola o, por último, metiendo el codigo .js como script en un archivo html.
*/
// 2do: Es un lenguaje debilmente tipado, es decir que no se necesita declarar el tipo de dato de una variable
// 3ro: Es un lenguaje orientado a objetos, es decir que todo es un objeto
// 4to: Es un lenguaje funcional, es decir que se pueden crear funciones y pasarlas como parámetros a otras funciones
// 5to: Es un lenguaje asincrono, es decir que no se ejecuta linea por linea, sino que se ejecuta en el orden que se vaya resolviendo
//6to: Es case sensitive, es decir que diferencia entre mayúsculas y minúsculas a la hora de declarar variables, funciones, etc.

/* Para correr JavaScript fuera del navegador web:
Node es un entorno de ejecución de javascript, es decir que se puede ejecutar javascript fuera del navegador, 
en el sistema operativo*/
/*Cuando esta instalado Node en el sistema , podemos llamarlo desde la consola de windows, escribiendo el comando node 
y presionando enter se ejecuta node y se puede escribir código javascript en la consola de windows y se ejecuta en consola. 
Por ejemplo, se puede escribir console.log('Hola mundo') y se ejecuta en consola. Para salir de node, se escribe .exit 
y se sale de node. 
También escribiendo node y el nombre del archivo .js*/

/* Haciendo hola Mundo en Visual Studio Code: Se puede usar o la consola sola, o el editor para escribir el código, 
el archivo.js se guarda en una carpeta, + la consola y llamando a node.*/ 

/* La historia es que este archivo html, que se ha creado aparte, tiene un script en el body que tiene como src 
el archivo app.js, entonces cuando se ejecuta el archivo html, se ejecuta el archivo app.js
Es mala práctica poner el código javascript directamente dentro del script del body, en vez de anexarlo en un archivo 
aparte como src. Mejor no mezclar el html con javascript, porque las páginas han de ser sencilla, enfocadas en el html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    
    <title>Document</title>
</head>
<body>
    <script src="app.js"> </script>
</body>
</html>
*/

// El archivo app.js tiene un console.log que es un método de javascript que escribe en consola

/*Se va a la carpeta contenedora del archivo html y te lo abre en chrome y luego, al ir a inspecccionar y a la consola, 
te sale el mensaje del console.log*/

/* Recomienda poner los script al final del body para que se cargue primero el html y luego el javascript. 
Porque si se pone el script en el head, se carga primero el javascript y luego el html, será más lenta la carga 
de la página. Mejor primero que se carguen los elementos y luego puedas interactuar.
Además, al poner el script en el head, puede que no encuentre los elementos html que se quieren manipular y te salga un error en consola.*/

/* Javascript se creo para hacer validaciones en el navegador, pero luego se fue mejorando y se fue convirtiendo en 
un lenguaje de programación*/

/* let nombre = 'Wolverine'; Es la forma de declarar una variable en javascript, es decir que no se necesita declarar el
 tipo de dato de una variable, es similar a var en c#*/

// console.log(nombre); para escribirlo en consola
let a = 10;
let b = 10;
let c = 10;

//2 formas mas son
var d = 10; //diferencia entre var y let es que var es global y let es local. En c# se usa var para declarar variables locales y globales. En javascript se usa let para declarar variables locales y var para declarar variables globales. En javascript se usa const para declarar constantes. 
const e = 10; //const es para declarar una constante, es decir que no se puede cambiar su valor

a= 20;
/*Para comprobar la reasignación del nuevo valor de la variable a o ver el valor de una variable en la consola de chrome, 
se escribe el nombre de la variable en la consola misma - sin necesidad de escribir en el código el hacer una llamada 
al método log de Console(WriteLine en c#):console.log(a) - y se ejecuta en consola.*/

/*Esto es porque las variables están alojadas en el objeto global de javascript, que es el objeto window, 
que es el objeto que contiene todo lo que se ejecuta en javascript. Por eso se puede acceder a las variables desde 
la consola, es el mismo caso que la pruebas con los métodos*/

/* Al escribir a en esa consola de chrome te sale un menú con todo lo que contiene el objeto window, que es el objeto global
de javascript, y ahí está la variable a con su valor 20*/
/* También se puede cambiar el valor de la variable desde la consola de chrome, escribiendo a = 30 y luego escribiendo a para
 ver el nuevo valor de la variable a.Más adelante se verá como proteger el código para que no se pueda cambiar/ser 
 tan manipulable desde la consola de chrome con módulos.*/

/* La forma de declarar con let es más moderna porque el lenguaje ha evolucionado con los años y var es más antigua, pero
 ambas funcionan igual.La inicialización de variables con var sigue siendo válido para mantener la compatibilidad con 
 versiones anteriores de javascript. La diferencia es que let tiene un alcance de bloque y var tiene un alcance global 
 o de función. Por ejemplo, si se declara una variable con var dentro de un bloque if, se puede acceder a ella desde fuera
  del bloque if, pero si se declara una variable con let dentro de un bloque if, no se puede acceder a ella desde fuera del
   bloque if. Por eso se recomienda usar let en vez de var, porque es más seguro y no se puede acceder a la variable desde
    fuera del bloque if. En c# se usa var para declarar variables locales y globales. En javascript se usa let para 
    declarar variables locales y var para declarar variables globales. 
    En esta web se explica también: es.javascript.info/var */
/*En la versión 5(ECMAScript5) de 2009 se implemento el uso de var. En 2015 se sacó la actualización ES6/ECMAScript2015, la
 más grande hasta el momento donde se implemento la declaración de variables con let, creación de clases y muchas cosas.*/

/* ¿Que versión utlizar? El ES6 es la versión más actualizada de las 2, pero no todos los navegadores lo soportan, por lo 
que se recomienda usar el ES5 de 2009, que es la versión más compatible con todos los navegadores. Para eso se usa Babel, 
que es un transpilador que convierte el código de ES6 a ES5. Por ejemplo, si se escribe código en ES6 y se quiere que 
funcione en un navegador que no soporta ES6, se usa Babel para convertir el código de ES6 a ES5 y que funcione en ese 
navegador. Babel es un transpilador que convierte el código de ES6 a ES5.*/

/* Más sobre este tema: Si se utiliza el ES6 ha y queremos que funcione en un navegador que no soporta ES6, se puede usar 
un polyfill, que es un código que se puede agregar al código de ES6 para que funcione en ese navegador. (Pero si se usa 
Babel, no se necesita usar un polyfill, porque Babel convierte el código de ES6 a ES5 y funciona en todos los navegadores.)*/ 
/* Polyfill: Código que provee el funcionamiento de una nueva caracteristica de JavaScript(ES6), en versiones viejas 
como ES5.*/

let f = a + b;

//Esta es la forma usual de declarar e inicializar variables.

//En javaScript también se puede hacer la declaración e inicialización de variables en una sola línea de código. 
//En c# no se puede hacer esto, se tiene que declarar e inicializar en 2 líneas de código.
/* La historia era así:
Declaramos 4 variables de tipo entero 
int edadPersona1;
int edadPersona2;
int edadPersona3;
int edadPersona4;

Imaginamos que queremos iniciar las 4 variables con EL MISMO VALOR, asignarle a todas el mismo valor, edad.
Podríamos hacerlo de una en una pero C# nos lo facilita así:
nombre de la primera variable = nombre de la segunda variable = nombre de la tercera variable = nombre de la cuarta 
variable (y por último nuevamente el operador asignación, seguido del valor que les quiero asignar a las variables) = 27;

edadPersona1 = edadPersona2 = edadPersona3 = edadPersona4 = 27;

Lo que hemos hecho en esta línea de código es iniciar las 4 variables en una única línea de código.

Ahora todas las variables valen 27

De tal forma que si escribimos por ejemplo, Console.WriteLine (edadPersona2);
Imprimirá en la consola el número 27, pongamos cualquiera de las 4 variables.

--> Cuidado, porque hay algo parecido en otros lenguajes pero que no hace exactamente lo mismo en C#. <-- EN JAVASCRIPT

 En otros lenguajes se haría así:
int edadPersona1, edadPersona2, edadPersona3, edadPersona4 = 27;
 
En C# no daría ningún error de compilación, pero no obtendremos el resultado que esperabamos, porque no todas las 
variables tienen el valor 27. La única variable que tiene el valor 27 es la última edadPersona4.
Las otras tres están sin iniciar, lo único que hemos hecho es declararlas y especificar que son de tipo entero int .

*/

//Así en javascript:

let g, h, i, j = 10;

//o

let k = 10, l = 20, m = 30;

/*JavaScript no lee los espacios en blanco, por eso se pueden poner espacios en blanco entre los valores de las variables 
o saltos de línea. Si lee una coma, va a buscar la siguient variable que se está declarando e inicializando, se va a
seguir ejecutando como si estuvieran en la misma línea.

let k=10,
    l=20,
    m=30;
*/
