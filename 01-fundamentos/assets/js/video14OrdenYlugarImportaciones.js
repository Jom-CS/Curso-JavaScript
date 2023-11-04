//El orden de las importaciones de los archivos de JavaScript es importante. 
/*En el archivo html donde se incluyen como src los archivos de JavaScript, como es el caso del archivo
que hicimos index.html, será necesario entender las implicaciones de añadir el script en un lugar u otro del html

Ponerlo en el head o en el body tiene comportamientos distintos. Afecta al rendimiento de la página web.
Si se pone en el head, se carga el archivo JavaScript antes de que se cargue el body. 
Ponerlos en el head no es mala práctica, (explicación copilot:) pero si se pone en el head, se debe poner el 
atributo defer en la etiqueta script.

Inciso sobre el atributo defer. Explicación de copilot:
------------------------------------------------------------------------------------------------------------
¿Por qué se debe poner el atributo defer en la etiqueta script si se importa un archivo javascript en el head
 de un archivo html?

GitHub Copilot
El atributo defer en la etiqueta script se utiliza para indicar al navegador que debe retrasar la ejecución del 
script hasta que se haya cargado completamente el documento HTML.

Si colocas un script en el head sin el atributo defer, el script se ejecutará inmediatamente, lo que puede 
bloquear la carga del documento hasta que se haya ejecutado el script. Esto puede llevar a una mala experiencia 
de usuario, especialmente si el script es grande o si la conexión a Internet es lenta.

Por otro lado, si usas el atributo defer, el script se ejecutará después de que se haya cargado el documento, 
lo que puede mejorar la experiencia de usuario al permitir que la página se cargue y se muestre más rápidamente.

Aquí tienes un ejemplo de cómo usar el atributo defer:

<head>
  <script src="script.js" defer></script>
</head>

En este ejemplo, el script script.js se cargará en segundo plano mientras se carga el documento, y se ejecutará 
después de que se haya cargado el documento.
------------------------------------------------------------------------------------------------------------
Siguiendo el vídeo, no es mala práctica pero no es lo habitual. Lo ideal es ponerlo antes de cerrar el body.
¿Cuales son los problemas de dejarlo en el head y los beneficios de ponerlo al final de body?

Pone de ejemplo que esté en el head y poner algo básico en body como un título h1. Se ve en chrome que se carga
el código archivo js en consola y en la vista de la página el titulo html del body.
Va a demostrar como que se cargue antes el código javascript puede ser un problema poniendo como primera 
instrucción del código una función llamada alert() que muestra un mensaje en una ventana emergente del navegador.
------------------------------------------------------------------------------------------------------------
Esto pone copilot:
El método alert() muestra una ventana con un mensaje opcional y un botón OK.

alert es una función incorporada en JavaScript que se utiliza para mostrar un cuadro de diálogo con un mensaje 
en el navegador. Es útil para depurar y mostrar información al usuario.

Aquí tienes un ejemplo de cómo usar alert:

alert("¡Hola, mundo!");

Cuando se ejecuta este código, aparecerá un cuadro de diálogo con el mensaje "¡Hola, mundo!".

Esta función alert() es un método dentro del objeto global window, que viene incorporada en el navegador. 
No es una función de JavaScript.

¿Cómo es esto que no es una función de JavaScript? Porque claro hace que salga una ventana emergente en 
el navegador, es en un entorno de navegador concretamente, no saldrá esa ventana si escribimos código js 
en consola si se ejecuta en node.js.

GitHub Copilot
alert es una función que está disponible en el objeto global window en los entornos de navegador web. Aunque 
técnicamente es proporcionada por el entorno del navegador y no por el lenguaje JavaScript en sí, a menudo se 
la considera una función de JavaScript porque está disponible en todos los entornos de navegador donde se 
ejecuta JavaScript.

Es importante tener en cuenta que alert no está disponible en entornos de JavaScript fuera del navegador, 
como Node.js. Por lo tanto, si estás escribiendo código que debe ser compatible con diferentes entornos de 
JavaScript, es posible que desees evitar usar alert y en su lugar usar otras formas de salida de datos, 
como console.log.

------------------------------------------------------------------------------------------------------------
Recapitulando, si se pone el script en el head, se carga el archivo JavaScript antes de que se cargue el body.
Muestra en el archivo html que se ha creado, (htmlParaVideo14.html) que se ha puesto el script en el head y se ha
 puesto un título h1 y un párrafo y no se aprecian cambios. Aparece código y html a la vez.

//Ahora demostrará, utilizando la instrucción alert(que se ha explicado arriba) como la 1ª que se ejecutará del
 código javascript, que problemas puede dar que el script se cargue antes de que se cargue el body.

 //Al cargar el html en el navegador, se muestra la ventana emergente con el mensaje de alerta y no se muestra 
 ni el resto del script ni el html. Esto es porque el navegador no ha cargado el body, no ha cargado el html y 
 está a la espera de que se pulse el botón de aceptar de la ventana emergente de alerta para ejecutar el resto
 del script.

 Es decir, cuando el navegador solicita el archivo html empieza a cargar ejecutar cada línea, al llegar a la
 línea del script va a buscar el archivo js video14OrdenYlugarImportaciones.js y lo carga (lo revisa rápidamente 
solo para localizar definiciones de funciones y variables) y ejecuta. 
Pero como el script está en el head, se carga y la instrucción alert() hará su acción de bloquear la carga del 
resto hasta que reciba el input del usuario.

Si se pone este script al final del body, se carga el archivo JavaScript después de que se cargue el body.

-Esto le da al usuario la sensación de que la página web se carga más rápido, porque se carga el html y
es el motivo de poner scripts al final del body y no en el head.
- Aquí hay que matizar que hay librerias de javascript que se cargan en el head, se verá más adelante
*/

alert('Hola desde el archivo video14OrdenYlugarImportaciones.js');

//el código que ha estado dejando y empleando para demostrar estos últimos videos:
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

/*

A menos que nuestro proyecto de javascript tenga muy pocas archivos, 5 o así, que estarían todos al mismo nivel
de carpeta, en la raiz del proyecto, en caso de más archivos se acostumbra a tener una estructura de carpetas/
directorios un poco más ordenada. Por ejemplo, una carpeta para los archivos de javascript, otra para imágenes,
otra para archivos de estilos css, etc.
La estructura de directorios depende mucho del framework usado.    
Se acostumbra tener:
- Una carpeta llamada assets. 
Dentro de esta carpeta:
- Una para los archivos de javascript llamada js
- Una carpeta para los archivos de estilos css.

He movido todos los archivos js a esta carpeta js.
Pero si no cambiamos nada más en el documento html, el archivo html no va a encontrar el archivo js, porque el 
archivo html está en la raiz del proyecto y el archivo js está dentro de una carpeta.

Cuando se vuelve a cargar el html en el navegador y vamos a ver en console el código javascript, nos muestra un
error: ERR_FILE_NOT_FOUND, que no encuentra el archivo js.

Como el archivo js ya no está en la raíz, el directorio 01-FUNDAMENTOS, vamos a cambiar el path o ruta de acceso.
Indicamos en el atributo src de la etiqueta script que el archivo js está en la carpeta js, que está dentro de la
carpeta assets, que está en la raiz del proyecto:

<script src="assets/js/video14OrdenYlugarImportaciones.js"></script>

- Así ya carga.
Para asegurarse de que carga correctamente en chrome, se va a Network y se selecciona la opción de Disable cache
para que no se guarde en caché y se cargue siempre el archivo js.      
*/

//Segundo aporte sobre el orden de las importaciones de los archivos de JavaScript:

/* Muestra el problema de declarar usando var que es una variable global alojada en el objeto global Window
y por lo tanto accesible desde otros archivos que no solo el local donde stán declara e inciada: 
video14OrdenYlugarImportaciones.js. Esto sirve para mostrar que intentar emplear/acceder a esta variable desde
otro archivo que se ejecute antes de que se ejecute el archivo donde se declara e inicializa dará error.
Por eso se demostrará que es importante el orden y lugar de las importaciones 

*/

// Creamos una variable global:
var miNombre = 'Peter Parker';

/* Se crea dentro de assets en la carpeta js, un archivo llamado alertsvideo14.js. Pone en el archivo html 
un script con src a alertsvideo14.js que ahora está una linea después del script con src a 
video14OrdenYlugarImportaciones.js

Si vamos al console de html, vemos que se puede acceder a la variable miNombre(porque es global y accesible)
A diferencia de si se declara con let o const, que no se puede acceder a ellas desde otros archivos, 
las variables declaradas con var se localizan en el objeto global Window y por lo tanto accesibles. 
Hacer esto hoy en día no es buena práctica.
¿Por qué?
Vemos que al escribir en console de chrome window y pulsar enter, nos muestra el objeto global Window y podemos
ver sus propiedades(pueden ser difrrentes dependiendo del navegador) 

Luego muestra lo que comentaba al inicio:

Si va al archivo de alertas y pone un console.log(miNombre), no da error, es una variable global y accesible.
Al estar en el html el script de alertas despues que el script de video14OrdenYlugarImportaciones.js, se ejecuta
y se muestra en consola el valor de la variable miNombre (lee la instrucción console.log(miNombre) del archivo 
alertsvideo14.js).

-->Peeero si se cambia el orden de los scripts en el html, poniendo el script de alertas antes que el script de
video14OrdenYlugarImportaciones.js, se ejecuta primero el script de alertas y da error porque no encuentra la
variable miNombre, ya que está declarada e inicializada en el código del otro achivo js y aún no se ha ejecutado
ese código. 
 
*/