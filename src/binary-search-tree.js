const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class BinarySearchTree {

//   constructor() {
//     this.tree = [];

//   }

//   root() {
//     if (this.tree.length < 1) {
//       return null
//     } else {
//       this.tree.data = this.tree[1]
//       return this.tree
//     }
//   }

//   add(data) {
//     let node_to_add = this.find(data);
//     if (node_to_add.length < 1) {
//       node_to_add[0] = [];
//       node_to_add[1] = data;
//       node_to_add[2] = [];

//     }
//   }

//   // _find(data) {
//   //   let node = this.tree;
//   //   while (node.length > 1) {
//   //     if (node[1] > data) {
//   //       node = node[0]
//   //     } else if (node[1] < data) {
//   //       node = node[2]
//   //     }
//   //   }
//   //   return node
//   // }

//   has(data) {
//     let node = this.find(data);
//     if (node.length < 1) {
//       return false
//     } else {
//       return true
//     }

//   }

//   find(data) {
//     let node = this.tree;
//     while (node.length > 1) {
//       if (node[1] > data) {
//         node = node[0]
//       } else if (node[1] < data) {
//         node = node[2]
//       }
//     }
//     return node

//     // if (node.length < 1) {
//     //   return null
//     // } else {
//     //   this.tree.data = node[1]
//     //   return this.tree
//     // }
//   }

//   remove(data) {
//     let node_to_remove = this.find(data)
//     if  (node_to_remove.length < 1) {
//       return
//     }  
//     if (node_to_remove[0].length > 0 && node_to_remove[2].length > 0){
//       let node_new_place = node_to_remove[2][0];
//       while (node_new_place[0].length > 0){
//         node_new_place = node_new_place[0]
//       }
//       node_new_place[0] = node_to_remove[0]
  
//       node_to_remove[0] = node_to_remove[2][0]
//       node_to_remove[1] = node_to_remove[2][1]
//       node_to_remove[2] = node_to_remove[2][2]
//     }
//     else if (node_to_remove[0].length > 0){
//       node_to_remove[2] = node_to_remove[0][2]
//       node_to_remove[1] = node_to_remove[0][1]
//       node_to_remove[0] = node_to_remove[0][0]
//     }
//     else if (node_to_remove[2].length > 0){
//       node_to_remove[0] = node_to_remove[2][0]
//       node_to_remove[1] = node_to_remove[2][1]
//       node_to_remove[2] = node_to_remove[2][2]
//     }
//     else{
//       while (node_to_remove.length > 0){
//         node_to_remove.pop()
//       }
//     }
//   }

// min() {
//   let node = this.tree;
//   while (node[0].length > 0) {
//     node = node[0]
//   }
//   return node[1]
// }

// max() {
//   let node = this.tree;
//   while (node[2].length > 0) {
//     node = node[2]
//   }
//   return node[1]
// }
// }





class BinarySearchTree {

  constructor() {
    this.tree = [];

  }

  root() {
    if (this.tree.length < 1) {
      return null
    } else {
      this.tree.data = this.tree[1]
      return this.tree
    }
  }

  add(data) {
    let node_to_add = this._find(data);
    if (node_to_add.length < 1) {
      node_to_add[0] = [];
      node_to_add[1] = data;
      node_to_add[2] = [];

    }
  }

  _find(data) {
    let node = this.tree;
    while (node.length > 1) {
      if (node[1] > data) {
        node = node[0]
      } else if (node[1] < data) {
        node = node[2]
      }else if (node[1] == data) {
        return node
      }
    }
    return node
  }

  has(data) {
    let node = this._find(data);
    if (node.length < 1) {
      return false
    } else {
      return true
    }

  }

  find(data) {
    let node = this._find(data)
    if (node.length < 1) {
      return null
    } else {
      this.tree.data = node[1]
      return this.tree
    }
  }

  remove(data) {
    let node_to_remove = this._find(data)
    if  (node_to_remove.length < 1) {
      return
    }  
    if (node_to_remove[0].length > 0 && node_to_remove[2].length > 0){
      let node_new_place = node_to_remove[2];
      while (node_new_place[0].length > 0){
        node_new_place = node_new_place[0]
      }
      node_new_place[0] = node_to_remove[0]
  
      node_to_remove[0] = node_to_remove[2][0]
      node_to_remove[1] = node_to_remove[2][1]
      node_to_remove[2] = node_to_remove[2][2]
    }
    else if (node_to_remove[0].length > 0){
      node_to_remove[2] = node_to_remove[0][2]
      node_to_remove[1] = node_to_remove[0][1]
      node_to_remove[0] = node_to_remove[0][0]
    }
    else if (node_to_remove[2].length > 0){
      node_to_remove[0] = node_to_remove[2][0]
      node_to_remove[1] = node_to_remove[2][1]
      node_to_remove[2] = node_to_remove[2][2]
    }
    else{
      while (node_to_remove.length > 0){
        node_to_remove.pop()
      }
    }
  }

min() {
  let node = this.tree;
  while (node[0].length > 0) {
    node = node[0]
  }
  return node[1]
}

max() {
  let node = this.tree;
  while (node[2].length > 0) {
    node = node[2]
  }
  return node[1]
}
}

module.exports = {
  BinarySearchTree
};