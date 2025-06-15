
//named export exposed to outside module to use anywhere
export function add(x:number,y:number):number{
    return x+y;
}


// export {add}

//default export so we can import with any name and only one method we can make default 

function testa(){
    console.log("csdsd")
}


export default testa;