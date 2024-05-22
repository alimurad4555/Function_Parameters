import promptSync from 'prompt-sync'
const prompt =promptSync();

//function greetings(name:string , greeting:string){
//    console.log(`${greeting} , ${name}`);
//    
//}
//greetings('ali' , "hello");

//default parameters jis ko ham value daga os ko defaul parmeters kheta h

//function greeting(name:string , greeting:string='hello'){
//    console.log(`${greeting} , ${name}`);
//    
//}
//greeting('ali');\

//function mySum(a:number=10 , b:number=20){
//    console.log(`${a} , ${b}`);
//    
//}
//mySum()

function make_shirt(massage:string , size:string= 'larage'){
    console.log(`we will sell you a shirt of size: ${size}, with massage on it ${massage}`);
    
}
make_shirt(`i love typescript`)
make_shirt(`i love typescript`,`medieam`)
