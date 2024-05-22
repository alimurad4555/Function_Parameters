"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
//function greetings(name:string , greeting:string){
//    console.log(`${greeting} , ${name}`);
//    
//}
//greetings('ali' , "hello");
//default parameters jis ko ham value daga os ko defaul parmeters kheta h
//function greeting(name:string , greeting:string='hello'){
//    console.log(`${greeting} , ${name}`);
    
//}
//greeting('ali');\
//function mySum(a:number=10 , b:number=20){
//    console.log(`${a} , ${b}`);
//    
//}
//mySum()
function make_shirt(massage, size) {
    if (size === void 0) { size = 'larage'; }
    console.log("we will sell you a shirt of size: ".concat(size, ", with massage on it ").concat(massage));
}
make_shirt("i love typescript");
make_shirt("i love typescript", "medieam");
