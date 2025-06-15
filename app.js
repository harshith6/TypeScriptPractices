"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util"); //start look in same diracroty 
const result = (0, util_1.add)(1, 2);
console.log(result);
const util_2 = __importDefault(require("./util"));
(0, util_2.default)();
var Utils;
(function (Utils) {
    class Myclass {
    }
    Utils.Myclass = Myclass;
    function myFunc() { }
    Utils.myFunc = myFunc;
    Utils.Name = "ahrdh";
})(Utils || (Utils = {}));
const d = Utils.Name;
