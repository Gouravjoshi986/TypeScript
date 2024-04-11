type User1 = {
    name:string;
    age:number;
 }

//Unions 
type id = string | number;
function printId(id:id){
    console.log(`ID:${id}`);
} 

//Intersection
type Employee1 = {
   name:string;
   startDate:string; 
}
type Manager = {
   name:string;
   department:string; 
}
type TeamLead = Employee1 & Manager;

const teamLead:TeamLead ={
    name:"Gourav",
    startDate:'1/1/2025',
    department:"Software Development"
}