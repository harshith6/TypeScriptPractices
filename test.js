"use strict";
// primitivies data types
const x = 2;
const y = "Hello";
const z = true;
const a = null;
const b = undefined;
const c = Symbol("id");
// literal types
const d = 42; // number literal type
const e = "Hello"; // string literal type
const f = true; // boolean literal type
const g = null; // null literal type
const h = undefined; // undefined literal type
const i = Symbol("id");
const l = "Hello"; // union type with string literals
const m = 1; // union type with number literals
//enum or enumration types
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// here in enum we can assign or automatically it will assign values to enums example small is 0
// we will have context what they will do 
// enum is data type that allows us to define a set of named constants
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var SizeValue;
(function (SizeValue) {
    SizeValue[SizeValue["Small"] = 100] = "Small";
    SizeValue[SizeValue["Medium"] = 200] = "Medium";
    SizeValue[SizeValue["Large"] = 300] = "Large";
})(SizeValue || (SizeValue = {}));
// using the enum
const move = Direction.Up; // using the enum
// type any 
let unknown = "Hello";
// any type can hold any value
//  for this first we need to assert the what type is then we can use it 
let unknownValue = 1;
if (typeof unknownValue === "number") {
    console.log(unknownValue.toFixed(2)); // now we can use toFixed method
}
if (typeof unknownValue == "number") {
    const result = x + 1;
}
else if (typeof unknownValue == "string") {
    const result = unknownValue.length;
}
//type cast 
const result = unknownValue + 1;
// when you use unklnow and any 
// function process(input:unknown):void{
//     if(typeof input ==="string"){
//     }
// }
// function proccessany(input:any):void{
// }
//  ? and !  check with undefined and unknow values 
const arr = [[{ name: "trim" }]];
//onlt getting or keep going only if its undefined 
// const el = arr.pop()?.pop()?.nametcs
// it forces to assumne its not undifind its donest matter its going to access even its undefined
const ell = arr.pop().pop().name;
// functions type 
function add(x, y) {
    if (x == 0) {
        return "invalid";
    }
    return x + y;
}
const resulr = add(2, 3);
//now ml is string or undifiend 
function makeName(fN, lN, mL) {
    if (mL)
        return fN + lN + mL;
    return fN + lN;
}
const fullName = makeName("harsh", "kc");
function callFun(func, param1, param2) {
    func(param1, param2);
}
callFun(makeName, "har", "ss");
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function applyFunc(funcs, values) {
    const results = [];
    for (let i = 0; i < funcs.length; i++) {
        const args = values[i];
        const result = funcs[i](args[0], args[1]);
        console.log(result);
        results.push(result);
    }
    return results;
}
applyFunc([mul, div], [[1, 2], [4, 5]]);
//advance function typing 
//rest parameters
function sum(...numbers) {
}
sum(1);
sum(1, 2);
function getlength(nameOrNames) {
    if (typeof nameOrNames == "string") {
        return nameOrNames.length;
    }
    else if (Array.isArray(nameOrNames)) {
        return "hello world";
    }
    return 0;
}
getlength("harshith");
getlength(["harhsith"]);
const person = {
    name: "ga",
    age: 123,
    hello: () => {
        console.log("Hello");
    }
};
const work = {
    employeeId: 123,
};
const manager = {
    employess: [],
    employeeId: 123
};
function getPerson(p) {
    return {
        name: "ad"
    };
}
///class
//access modifier   
// public, private, protected
// public: accessible from anywhere
// private: accessible only within the class
// protected: accessible within the class and its subclasses
// readonly: property can only be read, not written to
// static: property or method belongs to the class, not to instances of the class
// abstract: class cannot be instantiated, only extended by subclasses
// interface: defines a contract for classes to implement
// class is a blueprint for creating objects
// class can have properties, methods, and constructors
// class can implement interfaces
//  // class can extend other classes
// class can have access modifiers
class PersonClass {
    constructor(Fname) {
        this.Fname = Fname;
        this.greet();
    }
    greet() {
        console.log("hello");
    }
    //public bu default 
    getName() {
        return this.getName;
    }
}
const p1 = new PersonClass("harshith");
p1.getName();
class Dog {
    constructor(Danme) {
        this.Dname = Danme;
    }
    speak() {
        console.log("speckkkk");
    }
}
const dog = new Dog("haes");
class Cat {
    speak() {
        console.log("Meow");
    }
}
const cat = new Cat();
// mak eloog of the object rather then implemantion 
const animal = [cat, dog];
function makeSound(animal) {
    animal.speak();
}
makeSound(cat);
// when to use interface and when to use abstarct class 
// Use an interface when you want to define a contract for classes to implement.
// Use an abstract class when you want to provide a base implementation for subclasses to extend.
// Use an interface when you want to define a shape for an object or function.
// Use an abstract class when you want to define a base class with common functionality for subclasses.
// Use an interface when you want to define a type that can be implemented by multiple classes.
// Use an abstract class when you want to define a class that cannot be instantiated, but can be extended by subclasses.
// Use an interface when you want to define a type that can be used in multiple places.
// Use an abstract class when you want to define a class that can have properties and methods, but cannot be instantiated directly.
// Use an interface when you want to define a type that can be used as a parameter or return type in functions.
// Use an abstract class when you want to define a class that can have constructors and initialization logic.
// Use an interface when you want to define a type that can be used in type annotations.
// sataic attributes and mathods aree associated with the class itself, not with instances of the class.
//genarics 
// genarics are used to create reusable components that can work with any data type
function identity(arg) {
    return arg;
}
class DataStore {
    constructor() {
        this.items = [];
    }
}
const data = new DataStore();
function getValue(key, value1, values2) {
    if (key) {
        return value1;
    }
    return values2;
}
getValue("helko", 1, 1);
getValue("ha", 2, 3);
function comapreC(pl, p2) {
    return [pl[0], p2[1]];
}
const coords = [];
// Example of union type
function printId(id) {
    console.log(`ID: ${id}`);
}
const contsct = {
    name: "ds",
    email: "asd"
};
// type Guarda what tpe befor we perform 
// Type guards are used to narrow down the type of a variable at runtime.
// types of way
// 1. typeof
// 2. instanceof
// 3. in
// 4. user-defined type guards
// 5. discriminated unions
// 6. type predicates
// 7. type assertions
// 8. type narrowing
// 9. type inference
// 10. type casting
// 11. type checking
// 12. type narrowing with control flow analysis
/// 13. is // 1. instanceof
function isString(value) {
    return typeof value === "string";
}
// typeof
function logValue(value) {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    }
    else {
        console.log(`Number value: ${value}`);
    }
}
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.size ** 2;
    }
}
function logMessage(log) {
    switch (log.type) {
        case "warning":
            console.warn(`Warning: ${log.message}`);
            break;
        case "error":
            console.error(`Error: ${log.message}`);
            break;
        case "info":
            console.info(`Info: ${log.message}`);
            break;
    }
}
const myTodo = { title: "ada" };
// like key value pair any time 
const pages = {
    hone: { title: "home" }
};
const todo = {
    title: "clean",
    completed: false
};
//module 
