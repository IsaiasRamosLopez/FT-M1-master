"use strict";

// EJERCICIO 1
function nFactorial(n) {
  return n > 0 ? n * nFactorial(n - 1) : 1;
}

// EJERCICIO 2
function nFibonacci(n) {
  return n < 2 ? n : nFibonacci(n - 1) + nFibonacci(n - 2);
}

// EJERCICIO 3
/**
 * Implementa la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
 * - enqueue: agrega un valor respetando el orden.
 * - dequeue: remueve el primer valor y lo devuelve. Retorna undefined si no hay elementos.
 * - size: devuelve la cantidad de elementos.
 *
 * Pueden utilizar class o funcion constructora
 */
function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (value) {
  this.array.push(value);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

class _Queue {
  constructor(array = []) {
    this.array = array;
  }

  _enqueue(value) {
    this.array.push(value);
  }

  _dequeue() {
    return this.array.shift();
  }

  _size() {
    return this.array.length;
  }
}
var applyQueue = new _Queue([1, 0, 0]);
console.log(applyQueue);
applyQueue._enqueue(3);
applyQueue._dequeue();
applyQueue._enqueue(2);
applyQueue._dequeue();
applyQueue._enqueue(2);
applyQueue._dequeue();
console.log(applyQueue);
console.log("Size: ", applyQueue._size());

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
