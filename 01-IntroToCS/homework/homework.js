"use strict";

function BinarioADecimal(num) {
  let decimal = 0;
  let potencia = 0;
  while (num > 0) {
    decimal += (num % 10) * Math.pow(2, potencia);
    num = Math.floor(num / 10);
    potencia++;
  }
  return decimal; /* return parseInt(num, 2)*/
}

function DecimalABinario(num) {
  let array = [];
  while (num > 0) {
    array.push(num % 2);
    num = Math.floor(num / 2);
  }
  return array.reverse().join("").toString();
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
