// // Pedimos al usuario que ingrese dos números
// let num1 = prompt("Ingresa el primer número:");
// let num2 = prompt("Ingresa el segundo número:");

// // Convertimos los números ingresados a tipo numérico
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);

// // Creamos una función para sumar dos números
// function suma(a, b) {
//   return a + b;
// }

// // Creamos una función para restar dos números
// function resta(a, b) {
//   return a - b;
// }

// // Creamos una función para multiplicar dos números
// function multiplicacion(a, b) {
//   return a * b;
// }

// // Creamos una función para dividir dos números
// function division(a, b) {
//   if (b === 0) {
//     // Evitamos la división por cero
//     return "No se puede dividir entre cero.";
//   } else {
//     return a / b;
//   }
// }

// // Pedimos al usuario que seleccione la operación a realizar
// let operacion = prompt(
//   "Selecciona la operación que deseas realizar: \n1. Suma (+) \n2. Resta (-) \n3. Multiplicación (*) \n4. División (/)"
// );

// // Evaluamos la opción seleccionada y mostramos el resultado
// if (operacion === "1") {
//   console.log("El resultado es: " + suma(num1, num2));
// } else if (operacion === "2") {
//   console.log("El resultado es: " + resta(num1, num2));
// } else if (operacion === "3") {
//   console.log("El resultado es: " + multiplicacion(num1, num2));
// } else if (operacion === "4") {
//   console.log("El resultado es: " + division(num1, num2));
// } else {
//   console.log("Operación no válida.");
// }



// // Pedimos al usuario que ingrese dos números
// let num1 = prompt("Ingresa el primer número:");
// let num2 = prompt("Ingresa el segundo número:");

// // Convertimos los números ingresados a tipo numérico
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);

// // Creamos una función para sumar dos números
// function suma(a, b) {
//   return a + b;
// }

// // Creamos una función para restar dos números
// function resta(a, b) {
//   return a - b;
// }

// // Creamos una función para multiplicar dos números
// function multiplicacion(a, b) {
//   return a * b;
// }

// // Creamos una función para dividir dos números
// function division(a, b) {
//   if (b === 0) {
//     // Evitamos la división por cero
//     return "No se puede dividir entre cero.";
//   } else {
//     return a / b;
//   }
// }

// // Pedimos al usuario que seleccione la operación a realizar
// let operacion = prompt(
//   "Selecciona la operación que deseas realizar: \n1. Suma (+) \n2. Resta (-) \n3. Multiplicación (*) \n4. División (/)"
// );

// // Evaluamos la opción seleccionada y mostramos el resultado
// if (operacion === "1") {
//   alert("El resultado es: " + suma(num1, num2));
// } else if (operacion === "2") {
//   alert("El resultado es: " + resta(num1, num2));
// } else if (operacion === "3") {
//   alert("El resultado es: " + multiplicacion(num1, num2));
// } else if (operacion === "4") {
//   alert("El resultado es: " + division(num1, num2));
// } else {
//   alert("Operación no válida.");
// }


// Pedimos al usuario que ingrese dos números
let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");

// Convertimos los números ingresados a tipo numérico
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Creamos una lista de operaciones
const operaciones = [
  { signo: "+", nombre: "Suma" },
  { signo: "-", nombre: "Resta" },
  { signo: "*", nombre: "Multiplicación" },
  { signo: "/", nombre: "División" },
  { signo: "%", nombre: "Porcentaje" },
];

// Mostramos la lista de operaciones al usuario
console.log("Selecciona la operación que deseas realizar:");
for (let i = 0; i < operaciones.length; i++) {
  console.log(i + 1 + ". " + operaciones[i].nombre + " (" + operaciones[i].signo + ")");
}

// Pedimos al usuario que seleccione la operación a realizar
let opcion = prompt("Ingresa el número de la operación que deseas realizar:");

// Convertimos la opción ingresada a tipo numérico
opcion = parseInt(opcion);

// Evaluamos la opción seleccionada y realizamos la operación correspondiente
let resultado;
switch (opcion) {
  case 1:
    resultado = num1 + num2;
    break;
  case 2:
    resultado = num1 - num2;
    break;
  case 3:
    resultado = num1 * num2;
    break;
  case 4:
    resultado = num1 / num2;
    break;
  case 5:
    resultado = (num1 * num2) / 100;
    break;
  default:
    console.log("Operación no válida.");
    break;
}

// Mostramos el resultado por consola
if (resultado !== undefined) {
  console.log("El resultado es: " + resultado);
}
