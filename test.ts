
// primitivies data types
const x: number =2;
const y: string = "Hello";
const z: boolean = true;
const a: null = null;
const b: undefined = undefined;
const c: symbol = Symbol("id");

// literal types
const d: 42 = 42; // number literal type
const e: "Hello" = "Hello"; // string literal type
const f: true = true; // boolean literal type
const g: null = null; // null literal type
const h: undefined = undefined; // undefined literal type
const i: unique symbol = Symbol("id"); 

const l:"Hello" | "World" = "Hello"; // union type with string literals
const m: 1 | 2 | 3 = 1; // union type with number literals


//enum or enumration types
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// here in enum we can assign or automatically it will assign values to enums example small is 0
// we will have context what they will do 
// enum is data type that allows us to define a set of named constants
enum Size{
    Small,
    Medium,
    Large
}

enum SizeValue{
    Small =100,
    Medium = 200,
    Large = 300
}
// using the enum
const move: Direction = Direction.Up; // using the enum


// type any 

let unknown: any = "Hello";


// any type can hold any value
//  for this first we need to assert the what type is then we can use it 
let unknownValue:unknown = 1;

if (typeof unknownValue === "number") {
    console.log(unknownValue.toFixed(2)); // now we can use toFixed method
}
if(typeof unknownValue== "number"){
    const result = x+1;
}else if (typeof unknownValue == "string"){
    const result = unknownValue.length;
} 

//type cast 
const result = (unknownValue as number) + 1;


// when you use unklnow and any 
// function process(input:unknown):void{
//     if(typeof input ==="string"){

//     }
// }

// function proccessany(input:any):void{

// }


//  ? and !  check with undefined and unknow values 


const arr = [[{name:"trim"}]]

//onlt getting or keep going only if its undefined 
// const el = arr.pop()?.pop()?.nametcs

// it forces to assumne its not undifind its donest matter its going to access even its undefined
const ell = arr.pop()!.pop()!.name


// functions type 

function add(x:number,y:number):number | string{
    if(x==0){
        return "invalid"
    }
    return x+y
}

const resulr = add(2,3);
//now ml is string or undifiend 
function makeName(fN:string,lN:string,mL?:string){

    if(mL) return fN+ lN+mL
    return fN+lN 
}

const fullName =makeName("harsh","kc")

function callFun(func:(f:string,l:string,m?:string) => string,param1:string,param2:string){

    func(param1,param2)
}

callFun(makeName,"har","ss")


function mul(x:number,y:number):number{
    return x*y
}

function div(x:number,y:number):number{
    return x/y 
}


function applyFunc(funcs:((a:number,b:number)=>number)[],values:[number,number][] ):number[]{
    const results = [] as number[] ;

    for(let i=0; i < funcs.length;i++){
        const args = values[i];
        const result = funcs[i](args[0],args[1]);
        console.log(result)
        results.push(result);
    }

    return results


}

applyFunc([mul,div],[[1,2],[4,5]])



//advance function typing 

//rest parameters

function sum(...numbers:number[]){

}
sum(1);
sum(1,2);

//overloaded function having diffrenet call signatures

function getlength(name:string):number; // all cases of override 
function getlength(name:string[]):number;
function getlength(nameOrNames:unknown):unknown{ //genaral function
    
    if(typeof nameOrNames =="string"){
        return nameOrNames.length;
    }else if (Array.isArray(nameOrNames)){
        return "hello world"
    }
    
    return 0;
}

getlength("harshith")
getlength(["harhsith"])


//interfaces in type scrpit 

// interfaces are used to define the structure of an object
// they can be used to define the shape of an object, function, or class
// interfaces can be used to define the shape of an object
// is type or oustome type we can use all over TS
interface Person{
    name?:string,
    age?:number,
    hight?:number,
    hello?:() =>void
}

const person: Person ={
    name:"ga",
    age:123,
    hello:() => {
        console.log("Hello");
    }
}


interface Employe extends Person{
    employeeId:number
}

const work: Employe = {
    employeeId :123,

}

interface Manager extends Employe,Person{
    employess:Person[]
}

const manager : Manager ={
    employess:[],
    employeeId:123
}

function getPerson(p:Person):Person{
    return{
        name:"ad"
    }
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

    




class PersonClass{

    protected Fname:string;
    constructor(Fname:string){
        this.Fname = Fname;
        this.greet();
    }
    private greet(){
        console.log("hello")
    }
    //public bu default 
    getName(){
        return this.getName
    }
    
}

const p1= new PersonClass("harshith")
p1.getName()


//abstract class
// cant create instances of this 
// abstract class Animal{
//     move(duration:number){
//         console.log("moving")
//         this.makeSound(duration)//somewhere implemneted 
//     }
//     //abstract methos must be implement in subclass
//     abstract makeSound(duration:number):void;
// }


// class Dog extends Animal{
//     makeSound(duration: number): void {
//         console.log("Woof woof")
//     }
// }

// class Cat extends Animal{
//     makeSound(duration: number): void {
//         console.log("meow meow")
//     }
// }


// const dog = new Dog()
// const cat = new Cat()
// cat.move(2)
// dog.move(10)

//non implemented all are abstract class 
interface Animal{
    speak():void
}

class Dog implements Animal{
    private Dname:string;

    constructor(Danme:string){
        this.Dname =Danme
    }


    speak(){
        console.log("speckkkk")
    }
}

const dog:Animal = new Dog("haes")

class Cat implements Animal{
    speak(){
        console.log("Meow")
    }
}

const cat = new Cat()
// mak eloog of the object rather then implemantion 


const animal:Animal[] = [cat,dog];


function makeSound(animal:Animal){
    animal.speak()
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
function identity<T>(arg: T): T {
    return arg;
}

class DataStore<T>{
    private items: T[] = [];

}

const data = new DataStore<string>()


function getValue<K,V>(key:K,value1:V,values2:V):V{
    if(key){
        return value1;
    }
    return values2
}

getValue("helko",1,1)
getValue<string,number>("ha",2,3)


///coustom types is kind af alise  for not object

type Coordiate = [number,number]

function comapreC(pl:Coordiate,p2:Coordiate):Coordiate{
    return [pl[0],p2[1]];
}


const coords:Coordiate[] = []


//union (|) operator and intersection (&) operator..
// Union types allow a variable to hold values of multiple types.
type StringOrNumber = string | number | boolean;
// Intersection types allow a variable to hold values that satisfy multiple types.
type PersonOrAnimal = Person & Animal;
// Example of union type
function printId(id: string | number) {
    console.log(`ID: ${id}`);
} 


interface BusinessPartner{
    name:string
}

interface ContactDeatails{
    email:string
}

type BusinessC = BusinessPartner & ContactDeatails

const contsct : BusinessC ={
    name:"ds",
    email:"asd"
}



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
function isString(value: unknown): value is string {
    return typeof value === "string";
}

// typeof
function logValue(value: string | number) {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}


// discriminated unions
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    size: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.size ** 2;
    }
}

type Log = Warning | Error | Info;
interface Warning {
    type: "warning";
    message: string;
}

interface Error {
    type: "error";
    message: string;
}

interface Info {
    type: "info";
    message: string;
}
function logMessage(log: Log) {
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


// utility types
// Utility types are built-in types that provide common type transformations.
// 1. Partial<T>: Makes all properties of T optional.
type User = {
    id: number;
    name: string;
    email: string;
};
type PartialUser = Partial<User>;
// 2. Required<T>: Makes all properties of T required.
type RequiredUser = Required<PartialUser>;
// 3. Readonly<T>: Makes all properties of T read-only.
type ReadonlyUser = Readonly<User>;
// 4. Record<K, T>: Creates an object type with keys of type K and values of type T.
type RecordExample = Record<string, number>;
// 5. Pick<T, K>: Creates a type by picking a set of properties K from T.
type PickedUser = Pick<User, "id" | "name">;
// 6. Omit<T, K>: Creates a type by omitting a set of properties K from T.
type OmittedUser = Omit<User, "email">;
// 7. Exclude<T, U>: Excludes types from T that are assignable to U.
type ExcludedType = Exclude<string | number | boolean, string | boolean>;
// 8. Extract<T, U>: Extracts types from T that are assignable to U.
type ExtractedType = Extract<string | number | boolean, string | number>;
// 9. NonNullable<T>: Excludes null and undefined from T.
type NonNullableExample = NonNullable<string | number | null | undefined>;
// 10. ReturnType<T>: Gets the return type of a function type T.
type FunctionType = (a: number, b: number) => string;
type ReturnTypeExample = ReturnType<FunctionType>;
// 11. InstanceType<T>: Gets the instance type of a constructor function type T.
type ConstructorType = new (name: string) => { name: string };
type InstanceTypeExample = InstanceType<ConstructorType>;
// 12. Parameters<T>: Gets the parameter types of a function type T.
type ParametersExample = Parameters<FunctionType>;
// 13. ThisType<T>: Sets the type of `this` in a function type T.
type ThisTypeExample = {
    this: string;
    method(): void;
};
// 14. Awaited<T>: Gets the type that a Promise resolves to.
type AwaitedExample = Awaited<Promise<string>>;

interface Todo{
    title:string;
    completed?:boolean
}

const myTodo:Readonly<Todo> = { title:"ada"}
// readonly cant cahnge 
// myTodo.title = "" 

//Record 
interface PageInfo{
    title:string
}
// like key value pair any time 
const pages:Record<string,PageInfo> = {
    hone:{title :"home"}
}


// Pick type ,pick only requird attribute from existing types /interface
type TodoPreview = Pick<Todo,"title"|"completed">;
// its do reverse of pick need to included all not any one or few 
type TodoPreviewOmit = Omit<Todo,"title"|"completed">;
const todo:TodoPreview = {
    title:"clean",
    completed:false
}


//module 

//name space 

// const r = Utils.Name
