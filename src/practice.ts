const x:number = 1;        //whenever you define a variable in ts you give it a type
console.log(x);

// Types provided are : NUMBER, STRING, BOOLEAN, NULL, UNDEFINED.

function greet(firstName:string){
    console.log(`Hello ${firstName}`);
}
greet("Gourav")

// The :number or :string after the args is how you define the return type.
function sum(a:number,b:number):string{                                                   
    // return a+b                            // return type :number
    return `Sum = ${a+b}.`                   // return type :string
}
const value1 = sum(5,6);
console.log(value1);

function isLegal(age:number):boolean{         // return type :boolean 
    return age>18?true:false;
}
const value2:boolean = isLegal(19);          // you can define this without type as the ts compiler is smart enough to infer it from return type. 
console.log(value2);

// You can also pass functions as an argument and for type definition (args)=>return type is used. 
function greetAfter1s(fn:()=>void){
    setTimeout(fn,1000);
}
greetAfter1s(function(){
    console.log("Hello World")
})

function isLegalAge(user:User):string{
    return user.age > 18?`${user.name} is of Legal age`:`age ${user.age} is not a legal age`;
}
interface User{
    name:string;
    age:number;
}

const user1:User = {
    name:"Gourav",
    age:20
}

console.log(isLegalAge(user1));

//React Component of Todo with ts
// interface todoType{
//     title:string;
//     description:string;
//     completed:boolean;
// }
// interface todoInput{
//      todo: todoType
// }
// function Todo({todo}:TodoProp){
//     return (
//         <div>
//         <h1>{todo.title}</h1>
//         <h2>{todo.description}</h2>
//         <h3>`completed : ${todo.completed}`</h3>
//         </div>
//     )
// }

interface Person{
    name:string;
    age:number;
    greet(phrase:string):void;
}
class Employee implements Person{
    name:string;
    age:number;

    constructor(n:string,a:number){
        this.name = n;
        this.age = a;
    }
    greet(phrase:string):void{
        console.log(`${phrase} ${this.name}`);
    }
}