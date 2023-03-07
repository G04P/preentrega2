// function pedirNomnbreYMostrarlo() {
//   let nombre = prompt((Message = "Ingrese el nombre"));
//   console.log("El nombre ingresado es:" + nombre);
// }

// pedirNomnbreYMostrarlo();
// console.log("1");

// pedirNomnbreYMostrarlo();
// console.log("2");

// pedirNomnbreYMostrarlo();
// console.log("3");

function mostrarNombreCompleto() {
  let nombre = prompt((message = "ingrese su nombre"));
  let apellido = prompt((message = "ingrese su apellido"));
  const resultado = nombre + apellido;
  console.log("su nombre completo es: " + resultado);
}

mostrarNombreCompleto();

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarTresCadenas("estoy", "aprendiendo", "a programar");

function sumar(a, b) {
  return a + b;
}
console.log("el resultado es: " + sumar(5, 7));
