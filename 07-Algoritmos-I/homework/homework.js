"use strict";
// No cambies los nombres de las funciones.

function factorear(number) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr_prime_factors = [1];
  let x = 2;
  while (x <= number) {
    if (number % x === 0) {
      arr_prime_factors.push(x);
      number /= x;
      --x;
    }
    x++;
  }
  return arr_prime_factors;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array.length; y++) {
      if (array[x] <= array[y]) {
        [array[x], array[y]] = [array[y], array[x]];
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let x = 1; x < array.length; x++) {
    for (let y = 0; y < array.length; y++) {
      if (array[x] < array[y]) {
        [array[y], array[x]] = [array[x], array[y]];
      }
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let x = 0; x < array.length - 1; x++) {
    let min = x;
    for (let y = x + 1; y < array.length; y++) {
      if (array[y] < array[min]) min = y;
    }
    //- acá... tenemos el índice del número más chico
    if (x !== min) {
      [array[x], array[min]] = [array[min], array[x]];
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
