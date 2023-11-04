/*Empieza explicando que JavaScript es un  lenguaje interpretado, en vez de compilado. 
El compilado convierte el código en bloque en un lenguaje que la máquina entiende, mientras que el interpretado 
lo hace en tiempo real línea por línea.*/
/*Cuando cargamos el archivo app.js y le decimos a nuestro navegador web o al entorno donde sea que corramos JavaScript:
ejecuta esta línea, luego la siguiente, luego la siguiente, y así sucesivamente hasta que llegue al final del archivo.*/

//Es útil poder depurar y mostrar mensajes en cosola.

//Los mensajes en consola son utilizados para no interferir con el flujo normal del programa.

//Hay diferentes formas de mostrar mensajes en consola.
console.log('Hola Mundo');
console.warn('Hola Mundo'); //un warning es un mensaje de advertencia.
console.error('Hola Mundo'); //un error es un mensaje de error.
console.info('Hola Mundo'); //un info es un mensaje de información.

//Es interesante sacar mensajes en consola para comprobar el valor o estado de una variable en un momento determinado.

let a=10,
    b=20,
    c=30,
    d=40;

console.log(a); 
console.log(b);
console.log(c);

/*Para poder identificar/discernir qué valor es de qué variable alo imprimir en consola, se puede hacer de varias formas:
Acompañar esta impresión del valor de la variable con su nombre en un string. Separado el string y el nombre de 
la variable por una coma*/

console.log('a: ',a); 
console.log('b: ',b);
console.log('c: ',c);

/*El uso de parentesis indica que estamos ante la instrucción de una función o método. Un método es una función que se 
encuentra dentro de un objeto. ojeto Console, método log. El método log puede recibir varios argumentos: lo que hay entre
los paréntesis*/

// Los colores de los mensajes en consola de chrome son diferentes según el tipo de mensaje que sea. 
//gris string, morado número, boolean

//Hay una manera más sencilla, sin la utilización de un string con el nombre de la variable, de mostrar el valor de esta. 
//Con un solo argumento: Se pone el nombre de la variable entre llaves/corchetes dentro de los paréntesis.

console.log({a}); //esto es un objeto de JavaScript.  {a} es un objeto que tiene una propiedad a. 
console.log({b});
console.log({c});

//También se puede aplicar CSS directamente en el código de javaScript en el mensaje que salga en consola:
/* Para ello se pone un %c antes del string, lo que incrusta un estilo. Después como segundo argumento 
se pone detrás de una coma un string con el estilo CSS que se quiere aplicar, un color por ejemplo
Ejemplo: console.log('%cHola Mundo', 'color:blue; font-weight:bold;'); */

console.log('%cMis variables', 'color:blue; font-weight:bold;');
console.log({a}); 
console.log({b});
console.log({c});

//Como no tiene este lenguaje un fuerte tipado no es necesario al declarar e inicializar una variable decir que se trata de un string:
let nombre = 'Juan ';
let apellido = 'Perez';
console.log(nombre);

//Para imprimir un array o un objecto utiliza el metodo de consola .table() que hace una impresión en formas de tabla
console.table([a,b,c, nombre]);

//Me muestra en la primera columna el index del array y en la segunda el valor de cada elemento del array.
/*Es decir en la posición 0 del array está el valor de la variable a, en la posición 1 el valor de la variable b, etc. 
y muesta abajo el numero de elementos del array: 4*/

//Para imprimir un objeto en forma de tabla, se pone el objeto entre llaves
//console.table({a,b,c, nombre});
//Si es un objecto abajo en la tabla, te muestra las propiedades del objeto y sus valores.

//Ahora muestra el uso de una constante.
//En javaScript las constantes se escriben en minúscula si es local, a diferencia de otros lenguajes. 
//Se puede escribir en mayúscula cuando se trate de una constante global, alli donde se use en todo el programa.
const saludo = nombre + apellido;


