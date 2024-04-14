interface User {
    id: number;
    name: string;
    age:number; 
    email: string;
    createdAt: Date;
}
  
type updatedParams = Pick<User, 'name' | 'age'>;
  
const updateUserProfile = (user: updatedParams) => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
};


type UpdatePropsOptional = Partial<updatedParams>

function updateUser(updatedProps: UpdatePropsOptional) {
    console.log(`Name: ${updatedProps.name}, Age: ${updatedProps.age}`);
}

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
}
  
const config: Config = {                     // either mark every var as readonly 
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
// const config: Readonly<Config> = {              //or make the whole type Readonly  
//     endpoint: 'https://api.example.com',         // without marking var as readonly
//     apiKey: 'abcdef123456',
// };
  
  