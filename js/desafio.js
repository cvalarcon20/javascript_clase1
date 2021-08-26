
// declaracion de variables 


let nombre;
const curso = 'Curso de JavaScript - Desafio 1';
let numero1, numero2, resultado;
let texto1;
let texto2;

// 1- Pedir nombre mediante prompt y mostrarlo en consola y alert junto con algún texto de saludo. 
nombre = prompt('Introduzca su nombre completo:');
alert('Hola ' + nombre + '! Bienvenido al ' + curso); 
console.log('Hola ' + nombre + '! Bienvenido al ' + curso);



// 2- Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
alert('Introduzca un número para sumarlo a 500 y mostrar el resultado tanto en un alert en pantalla como en la consola del navegador.');
numero1 = parseInt(prompt("Ingrese un número"));
numero2 = 500;
resultado = numero1 + numero2;

alert(numero1 + ' + ' + numero2 + ' = ' + resultado);
console.log(numero1 + ' + ' + numero2 + ' = ' + resultado);



// 3- Ejemplo Pedir un texto mediante prompt luego otro, concatenarlos y mostrarlo en un alerta.
alert('Se solicitará nombre y dos textos mediante prompt() texto1 y texto2 para concatenarlos y mostralos en pantalla a través de un alert() y en la consola.');

texto0 = prompt('Introduzca su nombre');
texto1 = prompt("Introduzca el texto1");
texto2 = prompt("Introduzca el texto2");
alert("Vamos a concatenar los textos: --> " + texto1 + " " + texto2);
console.log("Resultado de la concatenación: " + texto1 + " " + texto2);
alert('Gracias ' + texto0 + ' por utilizar los servicios de Concatenaciones ');
