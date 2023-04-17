
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
