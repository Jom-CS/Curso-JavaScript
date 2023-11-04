/*

Hay tres formas de introducir datos del usuario:
    
        prompt
        confirm
        alert

Hoy en día no son tan usadas porque existen librerias que nos permiten crear alertas, interacciones más bonitas 
y personalizadas con el usuario. Pero es importante conocerlas.
*/

//Primera: alert

let alert = function (string) {
    console.log("Desde el alert function: " + string);
}

alert('Hola Mundo');

//bloquea la ejecución del código hasta que el usuario cierra la alerta.

//Segunda: prompt

/*
prompt recibe dos argumentos: el primero es el mensaje que se le va a mostrar al usuario y 
el segundo es el valor por defecto que va a tener el input.

prompt('Cual es tu nombre?', 'Sin nombre');

En el navegador se muestra una ventana emergente con el string que hemos puesto, en este caso:
¿Cuál es tu nombre?
y debajo un input, que queda a la espera de que el usuario escriba un string y dos botones: aceptar y cancelar.
Si se pulsa aceptar, el prompt devuelve un string con el valor que el usuario escribió en el input.

El segundo argumento es el valor por defecto que va a tener el input. Si se pulsa aceptar sin escribir nada.
Sale ese string por defecto en el input que se sobreescribe si se escribe algo.
Entonces si retorna un valor podemos guardarlo en una variable:
 */

let nombre = prompt('Cual es tu nombre?', 'Sin nombre');

/*Si queremos comprobarlo en la consola del navegador, recargamos el html e interactuamos con las ventanas 
emergentes: la alert y el prompt donde sobreescribimos el valor por defecto o le dejamos como está y le damos
a aceptar. Eso se habrá guardado en la variable, entonces en console podemos poner el nombre de la variable y 
nos muestra el valor.
Pero pone un console.log(nombre) debajo para no valernos solo del depurador del navegador.

*/
console.log(nombre);

/*Ahora quiere mostrar un valor distinto al undefined, si le quitamos el segundo argumento, que es el valor por
defecto, y el usuario no escribe nada en el input del prompt.*/

let nombre2 = prompt('Cual es tu nombre2?',);

//--> Si se pulsa aceptar sin escribir nada, el prompt devuelve un string vacío.

console.log(nombre2);

/*En la console de chrome se muestra un espacio vacio que corresponde a la linea del console.log(nombre2):
, es decir, la impresión del string vacío que devuelve el prompt.

Un string vacio se ve así: ''. El string vacío es el valor entre las dos comillas, no es lo mismo que undefined
o null.
Si ponemos un console.log que concatene asteriscos delante y detrás del nombre2, se ve que imprime los asteriscos
y ya no sale el espacio vacío. Esto es porque el string vacío es un string, no es undefined ni null.
*/
console.log('***' + nombre2 + '**');

//si escribieramos una a en el input saldría una a rodeada de asteriscos.

/*-->Si usamos la segunda opción de la ventana y el usuario pulsa cancelar, el prompt devuelve null.

Null es un valor especial de JavaScript que representa la ausencia de valor, se explicará diferencias con 
undefined más adelante.
*/

//Así pues de un prompt podempos obtener tres valores distintos: un string, un string vacío o null.

//Tercera: confirm

 const seleccion = confirm('Está seguro de borrar esto?');
 inventada();

//En el navegador se muestra una ventana emergente con el string que hemos puesto, en este caso:
//¿Está seguro de borrar esto? y debajo dos botones: aceptar y cancelar.
//Confirm devuelve un booleano.
//Si se pulsa aceptar, el confirm devuelve true.
//Si se pulsa cancelar, el confirm devuelve false.

/* Guardamos lo que devuelve prompt en una constante, por ejemplo. */

console.log(seleccion);

/*Si se pulsa aceptar, en la consola del navegador se muestra true, de color morado, eso significa que es
un booleano.*/

/*Más adelante en el curso cuando estemos viendo sobre importar paquetes de terceros, enseñara otras formas
 de manejar estos prompts, alertas y formas de interactuar con el usuario de formas que no sean bloqueantes 
 porque tal vez si queramos que se siga ejecutando código en el background, si ntener que bloquear el código
 de la app completamente*/

// LO MÁS IMPORTANTE DE ESTE TEMA:

/* Estas tres son funciones del objeto global window, que es el objeto que representa la ventana del navegador.
Por eso el código con alert, prompt y confirm se ejecuta en el navegador y no en node.js, no funcionaría.
 */

/* Para demostrarlo ejecutará el archivo en la terminal de visual Studio Code con node.js, que es un entorno de
ejecución de JavaScript que no tiene nada que ver con el navegador. Es decir node  nos habilita usar javascript
en el servidor, como lenguajes de programación del servidor/back end como con php, java, c#.

Para ejecutar el archivo en la terminal de visual Studio Code con node.js, se tiene que poner la ruta
en la cual se encuentra el archivo. El directorio raiz que es 01-fundamentos ya sale, luego se tiene que
especificar la carpeta assets y dentro de assets, la carpeta js y dentro de js el archivo que se quiere ejecutar.

En la terminal:
node assets/js/video16promptConfirmYalert.js

--Al darle enter se muestra el mensaje de alerta en la terminal, pero no se muestra la ventana emergente,
porque no estamos en el navegador, sino en node.js.
También nos muestra un error porque alert no es una función de node.js, sino del objeto global window.

*/

// function alert(string) {
//     console.log("Desde el alert function: " + string);
// }