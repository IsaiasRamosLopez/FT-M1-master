"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(array) {
  if (array.length < 2) return array;
  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
  function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left.slice()).concat(right.slice());
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
