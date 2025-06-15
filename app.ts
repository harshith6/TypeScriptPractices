import {add} from "./util" //start look in same diracroty 

const result = add(1,2)
console.log(result )

import test from "./util"

test()


//alis
import {add as a} from "./util"


//name spce dont need to import manullay if its in same project 
namespace Utils{
    export class Myclass{
        
    }
    export function myFunc(){}

    export const Name = "ahrdh"
}

const d:string = Utils.Name