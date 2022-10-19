"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
// function BinarySearchTree() {}
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  size() {
    let count = 1;
    if (this.left !== null) {
      count += this.left.size();
    }
    if (this.right !== null) {
      count += this.right.size();
    }
    return count;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

  depthFirstForEach(fn, order) {
    if (order === "pre-order") {
      fn(this.value);
    }
    if (this.left !== null) {
      this.left.depthFirstForEach(fn, order);
    }
    if (order === "in-order" || order === undefined) {
      fn(this.value);
    }
    if (this.right !== null) {
      this.right.depthFirstForEach(fn, order);
    }
    if (order === "post-order") {
      fn(this.value);
    }
  }

  breadthFirstForEach(fn) {
    let queue = [];
    queue.push(this);
    while (queue.length > 0) {
      let node = queue.shift();
      fn(node.value);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
