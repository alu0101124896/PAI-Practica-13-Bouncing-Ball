# Práctica 13. Bouncing Ball. Programación Gráfica,  Orientada a Objetos y dirigida por eventos en JS.
### Factor de ponderación: 10

### Objetivos

Los objetivos de esta práctica son:

* Poner en práctica metodologías y conceptos de Programación Orientada a Objetos.
* Practicar el proceso de pruebas de software (testing) utilizando Mocha y Chai.
* Practicar la evaluación del cubrimiento de código usando Istanbul.
* Poner en práctica la metodología de desarrollo TDD.
* Desarrollar páginas HTML sencillas.
* Practicar el uso de diseño web usando Bulma CSS.
* Practicar programación orientada a eventos.

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar este ejercicio:
* El comportamiento del programa debe ajustarse a lo solicitado en este enunciado.
* El programa debe ajustarse al paradigma de Orientación a Objetos: identifique en el problema propuesto clases, objetos y métodos que permitan resolver el problema siguiedo este paradigma.
* Se tendrán en cuenta los sucesivos avances en el proyecto que han de reflejarse a través de las sucesivos progresos (*commits*) efectuados al repositorio del proyecto.
* Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema.
* Se valorará la capacidad del programador(a) de introducir cambios en el programa desarrollado.
* Han de aportarse los tests utilizados para probar la aplicación en su fase de desarrollo.
* Han de aportarse los informes sobre cubrimiento de código de su aplicación.
* El formato del código ha de cumplir con lo establecido en la [Guía de Estilo de Google](https://google.github.io/styleguide/jsguide.html)
para Javascript. Utilice [ESLint](https://eslint.org/), convenientemente configurado, si se considera necesario para cumplir con este requisito.
* El código ha de estar documentado con [JSDoc](https://jsdoc.app/).
* Modularidad: el programa ha de escribirse de modo que las diferentes funcionalidades
que se precisen sean encapsuladas en módulos, clases, funciones y métodos cuya extensión léxica se
mantenga acotada.
* Eficiencia del código desarrollado.

### Presentación de resultados y ejecución de la aplicación
Diseñe una página `index.html` en la que enlace todas las prácticas y ejercicios que haya realizado en la
asignatura para los que disponga de una interfaz web.
Tiene libertad para diseñar tanto la página índice como las diferentes páginas correspondientes a cada
uno de los ejercicios que enlace desde ella. 
Enlace en `index.html` solamente ejercicios que estén totalmente operativos y puedan ser ejecutados a través
de sus correspondientes páginas.

Dedique atención al diseño de esas páginas puesto que el mismo es un elemento a tener en cuenta en la evaluación de esta
práctica.

Una de las páginas que ha de diseñar será `bouncing-ball.html` la correspondiente a esta práctica.
En esta última ha de enlazar (se indica el texto de cada uno de los enlaces) páginas correspondientes a:

* Ejecución de la aplicación (`Bouncing Ball`)
* Documentación de la aplicación (`Bouncing Ball - Documentación`)
* Resultados de las pruebas desarrolladas (`Bouncing Ball - Tests`)
* Informe de cubrimiento de código (`Bouncing Ball - Cubrimiento`)
* Diagrama UML de la aplicación (`Bouncing Ball - UML`)
* Reserve asimismo un enlace adicional (`Ejercicio`) para el ejercicio que realizará
  durante la sesión de evaluación.

Haga que todas estas páginas dispongan de un enlace `Índice` que enlace con `bouncing-ball.html`.

Las páginas que se enlacen desde `bouncing-ball.html` han de tener como título apellidos y nombre del autor de la aplicación. 

El servidor web que aloja estas páginas ha de seguir funcionando después de cerrar la sesión en la máquina
IaaS-ULL que aloja el servidor para posibilitar la evaluación del trabajo realizado.

### Bouncing Ball 

En esta práctica se propone desarrollar una aplicación JavaScript que visualice
una bola de color que se mueva siguiendo una trayectoria rectilínea con movimiento uniforme y rebote en los
bordes del contenedor gráfico en el que se realiza la simulación.

[Esta imagen](https://raw.githubusercontent.com/fsande/PAI-Labs-Public-Data/master/img/p13_BouncingBall/BouncingBall.png) 
estática puede servir de referencia para la simulación que se propone realizar.

### Especificacines de la aplicación

* Utilice en el desarrollo de la aplicación un enfoque orientado a objetos, reutilizando si lo considera
  conveniente código desarrollado en aplicaciones gráficas peviamente desarrolladas.

* Aplique igualmente un 
[enfoque TDD](https://en.wikipedia.org/wiki/Test-driven_development) 
iterando las fases de esa metodología.

* La posición inicial de la bola en el contenedor gráfico se decide aleatoriamente, así como el color de la
  misma.

* Los rebotes de la bola con las paredes del contenedor han de simular en la medida de lo posible el
  comportamiento de una bola física rebotando en las paredes de un recinto.

* No añada a la interfaz gráfica de su programa otros elementos adicionales.
