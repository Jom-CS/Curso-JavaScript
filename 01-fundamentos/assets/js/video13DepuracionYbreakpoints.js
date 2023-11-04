//Para dar respuesta a una necesidad de comprobar como va cambiando la información con las variables y
//el código, es decir ir como se va ejectuando cada linea del código, se puede utilizar la herramienta
//de depuración. Puede que el código no funcione como se espera en alguna linea y se quiere saber por qué
//y donde falla.

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Spiderman',
    x = a + b;

const saludo = c + d;

c = 'Hola de nuevo ';

//Estos console.log se pueden comentar para que no se ejecuten y no interfieran en la ejecución del código.
console.log(console.log(`Hola Mundo`));

console.log('%cMis variables', 'color:blue; font-weight:bold;');
console.log({a}); 
console.log({b});
console.log({c});

console.table([a,b,c, d, x, saludo]);

/*Si tenemos como src de un script este archivo en el archivo html, esto quiero decir que este archivo es
 una dependencia del archivo html. Al abrir el html en el navegador se carga el código de archivo javaScript
 */
/*Va a demostrar cargando el html en chrome (que ejecuta como script este código javascript) el uso de los
breakpoints (indicar a la izquierda de la linea de código, delante del numero de línea con un punto o una
flecha donde se tiene que parar la ejecución.) yendo a inspeccionar y sources, en vez de consola. Donde se 
muestra el código igual que aquí en Visual Studio.

En el navegador el intérprete integrado/interno de JavaScript, que se llama V8, es el que ejecuta el código y
lo interpreta. Este intérprete es el que tiene la capacidad de parar la ejecución del código en un punto 
determinado. Esto es lo que se llama un breakpoint.
Para poner un breakpoint se puede hacer de dos formas:
- Seleccionando la linea de código y pulsando F9. Esto pone un punto rojo en la linea de código.
- Pulsando en la linea de código a la izquierda del número de línea. Esto pone una flecha azul.

Si se hace el breakpoint en la linea de let a=10, nos mostrará solo en scope que hay el objeto global Window.
Si se hace el breakpoint en la linea de let b=20 o le damos a laopción de pasar a siguiente línea de código,
 nos mostrará en scope que hay el objeto global Window y ya figurará el Script y dentro
que ya ha inicializado la variable a.

Si seguimos avanzando en la ejecución del código, en la línea de let d = 'Spiderman', nos fijamos que si
ponemos el cursor encima de los nombres de las anteriores variables el depurador nos muestra el valor que tienen,
porque ya están inicializadas. Pero si ponemos el cursor encima de la variable d, que es donde se ha parado
la ejecución del código, nos muestra que el valor es undefined, porque aún no se ha inicializado.	
 */
//debugger; //con esta palabra reservada se puede parar la ejecución del código en el punto donde se ponga.

/*Ahora lo muestra en Visual Studio, con el puntito rojo se señala a la izquierda de la linea y en el menú de 
Run pone Start Debugging. Se puede poner el cursor encima de las variables y nos muestra el valor que tienen.
Para hacerlo es necesario tener instalado node.js y el plugin de node.js en Visual Studio.

Importante: Una cosa que hace JavaScript es que cuando se abre el archivo, se lee rapidamente todo el código 
y se guarda en un indice donde se guarda y definen la información de las variables y funciones que hay en el 
código. Luego empieza a ejecutar el código línea por línea.
Por eso en el depurador, en el scope, en la parte de variables, salen las variables que se han declarado pero
salen con el valor undefined, porque aún no se ha ejecutado la linea de código donde se inicializan.

*/

/*Para ver toda la ejecución debuggeada en Visual Studio Code, se puede hacer con la opción de Run and
 start debugging y abajo, en vez de terminal, abriendo la pestaña debug console. Se ve el resultado de esos
 console.log y a la derecha la linea donde se escribió la orden de ese log. */
 