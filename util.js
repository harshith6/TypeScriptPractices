"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
//named export exposed to outside module to use anywhere
function add(x, y) {
    return x + y;
}
// export {add}
//default export so we can import with any name and only one method we can make default 
function testa() {
    console.log("csdsd");
}
exports.default = testa;
