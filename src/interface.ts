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
const employee1 = new Employee("Gourav",20);
console.log(employee1.name,employee1.age);
console.log(employee1.greet("Hello"));

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